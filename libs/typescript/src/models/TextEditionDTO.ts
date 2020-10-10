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
    EditorDTO,
    EditorDTOFromJSON,
    EditorDTOFromJSONTyped,
    EditorDTOToJSON,
    TextFragmentDTO,
    TextFragmentDTOFromJSON,
    TextFragmentDTOFromJSONTyped,
    TextFragmentDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface TextEditionDTO
 */
export interface TextEditionDTO {
    /**
     * 
     * @type {number}
     * @memberof TextEditionDTO
     */
    manuscriptId: number;
    /**
     * 
     * @type {string}
     * @memberof TextEditionDTO
     */
    editionName: string;
    /**
     * 
     * @type {number}
     * @memberof TextEditionDTO
     */
    editorId: number;
    /**
     * 
     * @type {string}
     * @memberof TextEditionDTO
     */
    licence: string;
    /**
     * 
     * @type {{ [key: string]: EditorDTO; }}
     * @memberof TextEditionDTO
     */
    editors: { [key: string]: EditorDTO; };
    /**
     * 
     * @type {Array<TextFragmentDTO>}
     * @memberof TextEditionDTO
     */
    textFragments: Array<TextFragmentDTO>;
}

export function TextEditionDTOFromJSON(json: any): TextEditionDTO {
    return TextEditionDTOFromJSONTyped(json, false);
}

export function TextEditionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextEditionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'manuscriptId': json['manuscriptId'],
        'editionName': json['editionName'],
        'editorId': json['editorId'],
        'licence': json['licence'],
        'editors': (mapValues(json['editors'], EditorDTOFromJSON)),
        'textFragments': ((json['textFragments'] as Array<any>).map(TextFragmentDTOFromJSON)),
    };
}

export function TextEditionDTOToJSON(value?: TextEditionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'manuscriptId': value.manuscriptId,
        'editionName': value.editionName,
        'editorId': value.editorId,
        'licence': value.licence,
        'editors': (mapValues(value.editors, EditorDTOToJSON)),
        'textFragments': ((value.textFragments as Array<any>).map(TextFragmentDTOToJSON)),
    };
}


