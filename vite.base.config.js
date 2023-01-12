/*
 * @Author: youngsuper 1406422800@qq.com
 * @Date: 2023-01-13 02:12:15
 * @LastEditors: youngsuper 1406422800@qq.com
 * @LastEditTime: 2023-01-13 02:17:30
 * @FilePath: /vue-document/vite.base.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";

import vue from '@vitejs/plugin-vue';

import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

export default  defineConfig({
    plugins:[
        vue(),
        Components({
            resolvers:[AntDesignVueResolver()]
        }),
    ],
    resolve:{
        alias:{
            "@":fileURLToPath(new URL("./src",import.meta.url))
        }
    }
})