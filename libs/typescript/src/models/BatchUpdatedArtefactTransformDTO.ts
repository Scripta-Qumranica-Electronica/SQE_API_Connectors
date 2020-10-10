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
    UpdatedArtefactPlacementDTO,
    UpdatedArtefactPlacementDTOFromJSON,
    UpdatedArtefactPlacementDTOFromJSONTyped,
    UpdatedArtefactPlacementDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface BatchUpdatedArtefactTransformDTO
 */
export interface BatchUpdatedArtefactTransformDTO {
    /**
     * 
     * @type {Array<UpdatedArtefactPlacementDTO>}
     * @memberof BatchUpdatedArtefactTransformDTO
     */
    artefactPlacements: Array<UpdatedArtefactPlacementDTO>;
}

export function BatchUpdatedArtefactTransformDTOFromJSON(json: any): BatchUpdatedArtefactTransformDTO {
    return BatchUpdatedArtefactTransformDTOFromJSONTyped(json, false);
}

export function BatchUpdatedArtefactTransformDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchUpdatedArtefactTransformDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'artefactPlacements': ((json['artefactPlacements'] as Array<any>).map(UpdatedArtefactPlacementDTOFromJSON)),
    };
}

export function BatchUpdatedArtefactTransformDTOToJSON(value?: BatchUpdatedArtefactTransformDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'artefactPlacements': ((value.artefactPlacements as Array<any>).map(UpdatedArtefactPlacementDTOToJSON)),
    };
}


