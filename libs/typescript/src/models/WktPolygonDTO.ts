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
 * @interface WktPolygonDTO
 */
export interface WktPolygonDTO {
    /**
     * 
     * @type {string}
     * @memberof WktPolygonDTO
     */
    wktPolygon: string;
}

export function WktPolygonDTOFromJSON(json: any): WktPolygonDTO {
    return WktPolygonDTOFromJSONTyped(json, false);
}

export function WktPolygonDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): WktPolygonDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'wktPolygon': json['wktPolygon'],
    };
}

export function WktPolygonDTOToJSON(value?: WktPolygonDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'wktPolygon': value.wktPolygon,
    };
}

