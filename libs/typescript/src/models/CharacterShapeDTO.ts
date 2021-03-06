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
 * @interface CharacterShapeDTO
 */
export interface CharacterShapeDTO {
    /**
     * 
     * @type {number}
     * @memberof CharacterShapeDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CharacterShapeDTO
     */
    character: string;
    /**
     * 
     * @type {string}
     * @memberof CharacterShapeDTO
     */
    polygon: string;
    /**
     * 
     * @type {string}
     * @memberof CharacterShapeDTO
     */
    imageURL: string;
    /**
     * 
     * @type {number}
     * @memberof CharacterShapeDTO
     */
    rotation?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof CharacterShapeDTO
     */
    attributes: Array<string>;
}

export function CharacterShapeDTOFromJSON(json: any): CharacterShapeDTO {
    return CharacterShapeDTOFromJSONTyped(json, false);
}

export function CharacterShapeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharacterShapeDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'character': json['character'],
        'polygon': json['polygon'],
        'imageURL': json['imageURL'],
        'rotation': !exists(json, 'rotation') ? undefined : json['rotation'],
        'attributes': json['attributes'],
    };
}

export function CharacterShapeDTOToJSON(value?: CharacterShapeDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'character': value.character,
        'polygon': value.polygon,
        'imageURL': value.imageURL,
        'rotation': value.rotation,
        'attributes': value.attributes,
    };
}


