import type { Schema, Migration, ImpactFinding } from "../types.js";
export declare function generateMigrations(before: Schema, after: Schema): {
    migrations: Migration[];
    impacts: ImpactFinding[];
};
