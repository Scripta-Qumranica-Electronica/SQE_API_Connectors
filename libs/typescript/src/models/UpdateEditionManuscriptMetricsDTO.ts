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
 * @interface UpdateEditionManuscriptMetricsDTO
 */
export interface UpdateEditionManuscriptMetricsDTO {
    /**
     * 
     * @type {number}
     * @memberof UpdateEditionManuscriptMetricsDTO
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateEditionManuscriptMetricsDTO
     */
    height: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateEditionManuscriptMetricsDTO
     */
    xOrigin: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateEditionManuscriptMetricsDTO
     */
    yOrigin: number;
}

export function UpdateEditionManuscriptMetricsDTOFromJSON(json: any): UpdateEditionManuscriptMetricsDTO {
    return UpdateEditionManuscriptMetricsDTOFromJSONTyped(json, false);
}

export function UpdateEditionManuscriptMetricsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEditionManuscriptMetricsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'width': json['width'],
        'height': json['height'],
        'xOrigin': json['xOrigin'],
        'yOrigin': json['yOrigin'],
    };
}

export function UpdateEditionManuscriptMetricsDTOToJSON(value?: UpdateEditionManuscriptMetricsDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'width': value.width,
        'height': value.height,
        'xOrigin': value.xOrigin,
        'yOrigin': value.yOrigin,
    };
}


