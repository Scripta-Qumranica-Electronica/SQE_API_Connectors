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
 * @interface InterpretationAttributeCreateDTO
 */
export interface InterpretationAttributeCreateDTO {
    /**
     * 
     * @type {string}
     * @memberof InterpretationAttributeCreateDTO
     */
    commentary?: string | null;
    /**
     * 
     * @type {number}
     * @memberof InterpretationAttributeCreateDTO
     */
    sequence?: number | null;
    /**
     * 
     * @type {number}
     * @memberof InterpretationAttributeCreateDTO
     */
    attributeId: number;
    /**
     * 
     * @type {number}
     * @memberof InterpretationAttributeCreateDTO
     */
    attributeValueId: number;
}

export function InterpretationAttributeCreateDTOFromJSON(json: any): InterpretationAttributeCreateDTO {
    return InterpretationAttributeCreateDTOFromJSONTyped(json, false);
}

export function InterpretationAttributeCreateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretationAttributeCreateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commentary': !exists(json, 'commentary') ? undefined : json['commentary'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'attributeId': json['attributeId'],
        'attributeValueId': json['attributeValueId'],
    };
}

export function InterpretationAttributeCreateDTOToJSON(value?: InterpretationAttributeCreateDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commentary': value.commentary,
        'sequence': value.sequence,
        'attributeId': value.attributeId,
        'attributeValueId': value.attributeValueId,
    };
}


