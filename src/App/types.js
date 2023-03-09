/**
 * @typedef {{
 *   __row: number;
 *   __col: number;
 * }} App.Type;
 */

/**
 * @typedef { App.Type & {
 *   __val: string;
 * }} App.TypeString;
 */

/**
 * @typedef { App.Type & {
 *   __val: Date;
 * }} App.TypeDate;
 */

/**
 * @typedef { App.Type & {
 *   __val: number;
 * }} App.TypeNumber;
 */

/**
 * @typedef { App.Type & {
 *   __val: unknown;
 * }} App.TypeUnknown;
 */
