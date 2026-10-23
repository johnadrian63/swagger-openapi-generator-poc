import { Routes } from "@nestjs/core";

import { UserModule } from "./features/user/user.module.js";
import { ProductModule } from "./features/product/product.module.js";

export const appRoutes: Routes = [
    {
        path: "user",
        module: UserModule
    },
    {
        path: "product",
        module: ProductModule
    }
];