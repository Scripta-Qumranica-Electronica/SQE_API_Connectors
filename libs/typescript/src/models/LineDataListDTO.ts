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
    LineDataDTO,
    LineDataDTOFromJSON,
    LineDataDTOFromJSONTyped,
    LineDataDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface LineDataListDTO
 */
export interface LineDataListDTO {
    /**
     * 
     * @type {Array<LineDataDTO>}
     * @memberof LineDataListDTO
     */
    lines: Array<LineDataDTO>;
}

export function LineDataListDTOFromJSON(json: any): LineDataListDTO {
    return LineDataListDTOFromJSONTyped(json, false);
}

export function LineDataListDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineDataListDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lines': ((json['lines'] as Array<any>).map(LineDataDTOFromJSON)),
    };
}

export function LineDataListDTOToJSON(value?: LineDataListDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lines': ((value.lines as Array<any>).map(LineDataDTOToJSON)),
    };
}

