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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateEditorRightsDTO
 */
export interface UpdateEditorRightsDTO {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateEditorRightsDTO
     */
    mayLock: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateEditorRightsDTO
     */
    mayRead: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateEditorRightsDTO
     */
    mayWrite: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateEditorRightsDTO
     */
    isAdmin: boolean;
}

export function UpdateEditorRightsDTOFromJSON(json: any): UpdateEditorRightsDTO {
    return UpdateEditorRightsDTOFromJSONTyped(json, false);
}

export function UpdateEditorRightsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEditorRightsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mayLock': json['mayLock'],
        'mayRead': json['mayRead'],
        'mayWrite': json['mayWrite'],
        'isAdmin': json['isAdmin'],
    };
}

export function UpdateEditorRightsDTOToJSON(value?: UpdateEditorRightsDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mayLock': value.mayLock,
        'mayRead': value.mayRead,
        'mayWrite': value.mayWrite,
        'isAdmin': value.isAdmin,
    };
}

