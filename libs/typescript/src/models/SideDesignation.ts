/* tslint:disable */
/* eslint-disable */
/**
 * SQE API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum SideDesignation {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

export function SideDesignationFromJSON(json: any): SideDesignation {
    return SideDesignationFromJSONTyped(json, false);
}

export function SideDesignationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SideDesignation {
    return json as SideDesignation;
}

export function SideDesignationToJSON(value?: SideDesignation | null): any {
    return value as any;
}
