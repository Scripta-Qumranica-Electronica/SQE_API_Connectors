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
 * @interface UpdateArtefactGroupDTO
 */
export interface UpdateArtefactGroupDTO {
    /**
     * 
     * @type {string}
     * @memberof UpdateArtefactGroupDTO
     */
    name?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof UpdateArtefactGroupDTO
     */
    artefacts: Array<number>;
}

export function UpdateArtefactGroupDTOFromJSON(json: any): UpdateArtefactGroupDTO {
    return UpdateArtefactGroupDTOFromJSONTyped(json, false);
}

export function UpdateArtefactGroupDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateArtefactGroupDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'artefacts': json['artefacts'],
    };
}

export function UpdateArtefactGroupDTOToJSON(value?: UpdateArtefactGroupDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'artefacts': value.artefacts,
    };
}

