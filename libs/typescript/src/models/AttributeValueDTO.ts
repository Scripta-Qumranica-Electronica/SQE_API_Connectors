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
 * @interface AttributeValueDTO
 */
export interface AttributeValueDTO {
    /**
     * 
     * @type {number}
     * @memberof AttributeValueDTO
     */
    creatorId: number;
    /**
     * 
     * @type {number}
     * @memberof AttributeValueDTO
     */
    editorId: number;
    /**
     * 
     * @type {number}
     * @memberof AttributeValueDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AttributeValueDTO
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof AttributeValueDTO
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttributeValueDTO
     */
    cssDirectives?: string | null;
}

export function AttributeValueDTOFromJSON(json: any): AttributeValueDTO {
    return AttributeValueDTOFromJSONTyped(json, false);
}

export function AttributeValueDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeValueDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creatorId': json['creatorId'],
        'editorId': json['editorId'],
        'id': json['id'],
        'value': json['value'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'cssDirectives': !exists(json, 'cssDirectives') ? undefined : json['cssDirectives'],
    };
}

export function AttributeValueDTOToJSON(value?: AttributeValueDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'creatorId': value.creatorId,
        'editorId': value.editorId,
        'id': value.id,
        'value': value.value,
        'description': value.description,
        'cssDirectives': value.cssDirectives,
    };
}

