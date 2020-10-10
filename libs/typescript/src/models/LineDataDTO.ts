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
 * @interface LineDataDTO
 */
export interface LineDataDTO {
    /**
     * 
     * @type {number}
     * @memberof LineDataDTO
     */
    lineId: number;
    /**
     * 
     * @type {string}
     * @memberof LineDataDTO
     */
    lineName: string;
}

export function LineDataDTOFromJSON(json: any): LineDataDTO {
    return LineDataDTOFromJSONTyped(json, false);
}

export function LineDataDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineDataDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineId': json['lineId'],
        'lineName': json['lineName'],
    };
}

export function LineDataDTOToJSON(value?: LineDataDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lineId': value.lineId,
        'lineName': value.lineName,
    };
}


