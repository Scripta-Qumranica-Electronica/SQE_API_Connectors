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
import {
    AttributeDTO,
    AttributeDTOFromJSON,
    AttributeDTOFromJSONTyped,
    AttributeDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface AttributeListDTO
 */
export interface AttributeListDTO {
    /**
     * 
     * @type {Array<AttributeDTO>}
     * @memberof AttributeListDTO
     */
    attributes: Array<AttributeDTO>;
}

export function AttributeListDTOFromJSON(json: any): AttributeListDTO {
    return AttributeListDTOFromJSONTyped(json, false);
}

export function AttributeListDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeListDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': ((json['attributes'] as Array<any>).map(AttributeDTOFromJSON)),
    };
}

export function AttributeListDTOToJSON(value?: AttributeListDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': ((value.attributes as Array<any>).map(AttributeDTOToJSON)),
    };
}


