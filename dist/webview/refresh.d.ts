import { ExecOptions } from '../types/core';
import { ConfigPullRefreshRes, ConfigPullRefreshParams, OnPullRefreshRes, StartPullRefreshRes, EndPullRefreshRes } from '../types/webview';
export declare type configPullRefreshOptions = ConfigPullRefreshParams & ExecOptions<ConfigPullRefreshRes, void>;
export declare type onPullRefreshOptions = ExecOptions<OnPullRefreshRes, void>;
export declare type startPullRefreshOptions = ExecOptions<StartPullRefreshRes, void>;
export declare type EndPullRefreshResOptions = ExecOptions<EndPullRefreshRes, void>;
/**
 * 下拉刷新-配置
 * @param {configPullRefreshOptions} [options]
 * @module webview
 * @returns {ConfigPullRefreshRes}
 */
export declare function configPullRefresh(options: configPullRefreshOptions): Promise<ConfigPullRefreshRes>;
/**
 * 下拉刷新-监听
 * @param {onPullRefreshOptions} [options]
 * @module webview
 * @returns {OnPullRefreshRes}
 */
export declare function onPullRefresh(options: onPullRefreshOptions): Promise<OnPullRefreshRes>;
/**
 * 下拉刷新-主动触发
 * @param {startPullRefreshOptions} [options]
 * @module webview
 * @returns {StartPullRefreshRes}
 */
export declare function startPullRefresh(options: startPullRefreshOptions): Promise<StartPullRefreshRes>;
/**
 * 下拉刷新-停止
 * @param {EndPullRefreshResOptions} [options]
 * @module webview
 * @returns {EndPullRefreshRes}
 */
export declare function endPullRefresh(options: EndPullRefreshResOptions): Promise<EndPullRefreshRes>;
