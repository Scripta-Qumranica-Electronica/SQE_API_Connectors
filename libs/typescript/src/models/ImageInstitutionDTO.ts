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
 * @interface ImageInstitutionDTO
 */
export interface ImageInstitutionDTO {
    /**
     * 
     * @type {string}
     * @memberof ImageInstitutionDTO
     */
    name: string;
}

export function ImageInstitutionDTOFromJSON(json: any): ImageInstitutionDTO {
    return ImageInstitutionDTOFromJSONTyped(json, false);
}

export function ImageInstitutionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageInstitutionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function ImageInstitutionDTOToJSON(value?: ImageInstitutionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


