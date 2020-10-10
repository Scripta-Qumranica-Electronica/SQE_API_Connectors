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
    CharacterShapeDTO,
    CharacterShapeDTOFromJSON,
    CharacterShapeDTOFromJSONTyped,
    CharacterShapeDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface EditionScriptCollectionDTO
 */
export interface EditionScriptCollectionDTO {
    /**
     * 
     * @type {Array<CharacterShapeDTO>}
     * @memberof EditionScriptCollectionDTO
     */
    letters: Array<CharacterShapeDTO>;
}

export function EditionScriptCollectionDTOFromJSON(json: any): EditionScriptCollectionDTO {
    return EditionScriptCollectionDTOFromJSONTyped(json, false);
}

export function EditionScriptCollectionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditionScriptCollectionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'letters': ((json['letters'] as Array<any>).map(CharacterShapeDTOFromJSON)),
    };
}

export function EditionScriptCollectionDTOToJSON(value?: EditionScriptCollectionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'letters': ((value.letters as Array<any>).map(CharacterShapeDTOToJSON)),
    };
}

