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
 * @interface EditionManuscriptMetricsDTO
 */
export interface EditionManuscriptMetricsDTO {
    /**
     * 
     * @type {number}
     * @memberof EditionManuscriptMetricsDTO
     */
    ppi: number;
    /**
     * 
     * @type {number}
     * @memberof EditionManuscriptMetricsDTO
     */
    editorId: number;
    /**
     * 
     * @type {number}
     * @memberof EditionManuscriptMetricsDTO
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof EditionManuscriptMetricsDTO
     */
    height: number;
    /**
     * 
     * @type {number}
     * @memberof EditionManuscriptMetricsDTO
     */
    xOrigin: number;
    /**
     * 
     * @type {number}
     * @memberof EditionManuscriptMetricsDTO
     */
    yOrigin: number;
}

export function EditionManuscriptMetricsDTOFromJSON(json: any): EditionManuscriptMetricsDTO {
    return EditionManuscriptMetricsDTOFromJSONTyped(json, false);
}

export function EditionManuscriptMetricsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditionManuscriptMetricsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ppi': json['ppi'],
        'editorId': json['editorId'],
        'width': json['width'],
        'height': json['height'],
        'xOrigin': json['xOrigin'],
        'yOrigin': json['yOrigin'],
    };
}

export function EditionManuscriptMetricsDTOToJSON(value?: EditionManuscriptMetricsDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ppi': value.ppi,
        'editorId': value.editorId,
        'width': value.width,
        'height': value.height,
        'xOrigin': value.xOrigin,
        'yOrigin': value.yOrigin,
    };
}


