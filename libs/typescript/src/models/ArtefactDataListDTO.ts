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
    ArtefactDataDTO,
    ArtefactDataDTOFromJSON,
    ArtefactDataDTOFromJSONTyped,
    ArtefactDataDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface ArtefactDataListDTO
 */
export interface ArtefactDataListDTO {
    /**
     * 
     * @type {Array<ArtefactDataDTO>}
     * @memberof ArtefactDataListDTO
     */
    artefacts: Array<ArtefactDataDTO>;
}

export function ArtefactDataListDTOFromJSON(json: any): ArtefactDataListDTO {
    return ArtefactDataListDTOFromJSONTyped(json, false);
}

export function ArtefactDataListDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArtefactDataListDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'artefacts': ((json['artefacts'] as Array<any>).map(ArtefactDataDTOFromJSON)),
    };
}

export function ArtefactDataListDTOToJSON(value?: ArtefactDataListDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'artefacts': ((value.artefacts as Array<any>).map(ArtefactDataDTOToJSON)),
    };
}

