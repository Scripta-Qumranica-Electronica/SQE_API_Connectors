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
 * @interface AdminEditorRequestDTO
 */
export interface AdminEditorRequestDTO {
    /**
     * 
     * @type {string}
     * @memberof AdminEditorRequestDTO
     */
    editorName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdminEditorRequestDTO
     */
    editorEmail: string;
    /**
     * 
     * @type {number}
     * @memberof AdminEditorRequestDTO
     */
    editionId: number;
    /**
     * 
     * @type {string}
     * @memberof AdminEditorRequestDTO
     */
    editionName: string;
    /**
     * 
     * @type {Date}
     * @memberof AdminEditorRequestDTO
     */
    date: Date;
    /**
     * 
     * @type {boolean}
     * @memberof AdminEditorRequestDTO
     */
    mayLock: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AdminEditorRequestDTO
     */
    mayRead: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AdminEditorRequestDTO
     */
    mayWrite: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AdminEditorRequestDTO
     */
    isAdmin: boolean;
}

export function AdminEditorRequestDTOFromJSON(json: any): AdminEditorRequestDTO {
    return AdminEditorRequestDTOFromJSONTyped(json, false);
}

export function AdminEditorRequestDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminEditorRequestDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'editorName': !exists(json, 'editorName') ? undefined : json['editorName'],
        'editorEmail': json['editorEmail'],
        'editionId': json['editionId'],
        'editionName': json['editionName'],
        'date': (new Date(json['date'])),
        'mayLock': json['mayLock'],
        'mayRead': json['mayRead'],
        'mayWrite': json['mayWrite'],
        'isAdmin': json['isAdmin'],
    };
}

export function AdminEditorRequestDTOToJSON(value?: AdminEditorRequestDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'editorName': value.editorName,
        'editorEmail': value.editorEmail,
        'editionId': value.editionId,
        'editionName': value.editionName,
        'date': (value.date.toISOString()),
        'mayLock': value.mayLock,
        'mayRead': value.mayRead,
        'mayWrite': value.mayWrite,
        'isAdmin': value.isAdmin,
    };
}


