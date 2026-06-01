import * as fs from "fs";
import * as path from "path";
export function parseSchema(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`Schema file not found: ${filePath}`);
    }
    const content = fs.readFileSync(filePath, "utf-8");
    const ext = path.extname(filePath).toLowerCase();
    if (ext === ".json") {
        try {
            const parsed = JSON.parse(content);
            return normalizeSchema(parsed);
        }
        catch (e) {
            throw new Error(`Invalid JSON in schema file: ${e}`);
        }
    }
    if (ext === ".yaml" || ext === ".yml") {
        // For YAML, we'd normally use the yaml package, but for this scaffold
        // we'll parse a simplified format
        try {
            const parsed = parseSimpleYaml(content);
            return normalizeSchema(parsed);
        }
        catch (e) {
            throw new Error(`Invalid YAML in schema file: ${e}`);
        }
    }
    throw new Error(`Unsupported schema format: ${ext}`);
}
function parseSimpleYaml(content) {
    // Simple YAML parser for basic schema structure
    const result = { tables: [] };
    const lines = content.split("\n");
    let currentTable = null;
    const tables = [];
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#"))
            continue;
        if (!line.startsWith(" ") && line.includes(":")) {
            const [key, value] = line.split(":").map(s => s.trim());
            if (key === "tables") {
                // Start of tables section
                continue;
            }
            if (key === "version") {
                result.version = value;
            }
        }
        if (line.startsWith("  - name:")) {
            if (currentTable) {
                tables.push(currentTable);
            }
            const name = line.split(":")[1].trim();
            currentTable = { name, columns: [] };
        }
        if (line.startsWith("    - name:") && currentTable) {
            const name = line.split(":")[1].trim();
            const column = { name };
            const nextLines = lines.slice(lines.indexOf(line) + 1, lines.indexOf(line) + 5);
            for (const nextLine of nextLines) {
                if (nextLine.includes("type:")) {
                    column.type = nextLine.split(":")[1].trim();
                }
                if (nextLine.includes("nullable:")) {
                    column.nullable = nextLine.includes("true");
                }
                if (nextLine.includes("primaryKey:")) {
                    column.primaryKey = nextLine.includes("true");
                }
            }
            if (!column.type) {
                column.type = "varchar(255)";
            }
            if (column.nullable === undefined) {
                column.nullable = false;
            }
            currentTable.columns.push(column);
        }
    }
    if (currentTable) {
        tables.push(currentTable);
    }
    result.tables = tables;
    return result;
}
function normalizeSchema(data) {
    const obj = data;
    if (!obj.tables || !Array.isArray(obj.tables)) {
        throw new Error("Schema must have a 'tables' array");
    }
    return {
        version: obj.version || "1.0.0",
        tables: obj.tables.map(t => ({
            name: t.name,
            columns: (t.columns || []).map(c => ({
                name: c.name,
                type: c.type || "varchar(255)",
                nullable: c.nullable ?? false,
                default: c.default,
                primaryKey: c.primaryKey ?? false,
                autoIncrement: c.autoIncrement ?? false
            })),
            indexes: t.indexes ?? []
        }))
    };
}
//# sourceMappingURL=schema-parser.js.map