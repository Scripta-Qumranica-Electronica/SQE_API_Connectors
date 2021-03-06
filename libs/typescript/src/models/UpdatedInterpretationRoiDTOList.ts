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
    UpdatedInterpretationRoiDTO,
    UpdatedInterpretationRoiDTOFromJSON,
    UpdatedInterpretationRoiDTOFromJSONTyped,
    UpdatedInterpretationRoiDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdatedInterpretationRoiDTOList
 */
export interface UpdatedInterpretationRoiDTOList {
    /**
     * 
     * @type {Array<UpdatedInterpretationRoiDTO>}
     * @memberof UpdatedInterpretationRoiDTOList
     */
    rois: Array<UpdatedInterpretationRoiDTO>;
}

export function UpdatedInterpretationRoiDTOListFromJSON(json: any): UpdatedInterpretationRoiDTOList {
    return UpdatedInterpretationRoiDTOListFromJSONTyped(json, false);
}

export function UpdatedInterpretationRoiDTOListFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatedInterpretationRoiDTOList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rois': ((json['rois'] as Array<any>).map(UpdatedInterpretationRoiDTOFromJSON)),
    };
}

export function UpdatedInterpretationRoiDTOListToJSON(value?: UpdatedInterpretationRoiDTOList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rois': ((value.rois as Array<any>).map(UpdatedInterpretationRoiDTOToJSON)),
    };
}


