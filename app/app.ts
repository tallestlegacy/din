/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import { svelteNativeNoFrame } from "svelte-native";
import App from "./App.svelte";
import { registerNativeViewElement } from "svelte-native/dom";

import PagerElement from "@nativescript-community/ui-pager/svelte";
import { PagerItem } from "@nativescript-community/ui-pager";

import { install } from "@nativescript-community/ui-drawer";
import DrawerElement from "@nativescript-community/ui-drawer/svelte";

//install(); // install Drawer Gesture
DrawerElement.register(); //register Drawer

// Register Pager Elemenr
PagerElement.register();
registerNativeViewElement("pageritem", () => PagerItem);

svelteNativeNoFrame(App, {});
