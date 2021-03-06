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

/**
 * 
 * @export
 * @enum {string}
 */
export enum EditionEntities {
    Edition = 'edition',
    Artefact = 'artefact',
    ArtefactGroup = 'artefactGroup',
    Attribute = 'attribute',
    TextFragment = 'textFragment',
    Line = 'line',
    SignInterpretation = 'signInterpretation',
    Roi = 'roi'
}

export function EditionEntitiesFromJSON(json: any): EditionEntities {
    return EditionEntitiesFromJSONTyped(json, false);
}

export function EditionEntitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditionEntities {
    return json as EditionEntities;
}

export function EditionEntitiesToJSON(value?: EditionEntities | null): any {
    return value as any;
}

