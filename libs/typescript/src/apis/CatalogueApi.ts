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


import * as runtime from '../runtime';
import {
    CatalogueMatchInputDTO,
    CatalogueMatchInputDTOFromJSON,
    CatalogueMatchInputDTOToJSON,
    CatalogueMatchListDTO,
    CatalogueMatchListDTOFromJSON,
    CatalogueMatchListDTOToJSON,
} from '../models';

export interface V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDeleteRequest {
    iaaEditionCatalogToTextFragmentId: number;
}

export interface V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPostRequest {
    iaaEditionCatalogToTextFragmentId: number;
}

export interface V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGetRequest {
    editionId: number;
}

export interface V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGetRequest {
    imagedObjectId: string;
}

export interface V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGetRequest {
    manuscriptId: number;
}

export interface V1CataloguePostRequest {
    catalogueMatchInputDTO?: CatalogueMatchInputDTO;
}

export interface V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGetRequest {
    textFragmentId: number;
}

/**
 * 
 */
export class CatalogueApi extends runtime.BaseAPI {

    /**
     * Remove an existing imaged object and text fragment match, which is not correct
     */
    async v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDeleteRaw(requestParameters: V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.iaaEditionCatalogToTextFragmentId === null || requestParameters.iaaEditionCatalogToTextFragmentId === undefined) {
            throw new runtime.RequiredError('iaaEditionCatalogToTextFragmentId','Required parameter requestParameters.iaaEditionCatalogToTextFragmentId was null or undefined when calling v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId}`.replace(`{${"iaaEditionCatalogToTextFragmentId"}}`, encodeURIComponent(String(requestParameters.iaaEditionCatalogToTextFragmentId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove an existing imaged object and text fragment match, which is not correct
     */
    async v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete(requestParameters: V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDeleteRequest): Promise<void> {
        await this.v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDeleteRaw(requestParameters);
    }

    /**
     * Confirm the correctness of an existing imaged object and text fragment match
     */
    async v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPostRaw(requestParameters: V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.iaaEditionCatalogToTextFragmentId === null || requestParameters.iaaEditionCatalogToTextFragmentId === undefined) {
            throw new runtime.RequiredError('iaaEditionCatalogToTextFragmentId','Required parameter requestParameters.iaaEditionCatalogToTextFragmentId was null or undefined when calling v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId}`.replace(`{${"iaaEditionCatalogToTextFragmentId"}}`, encodeURIComponent(String(requestParameters.iaaEditionCatalogToTextFragmentId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Confirm the correctness of an existing imaged object and text fragment match
     */
    async v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost(requestParameters: V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPostRequest): Promise<void> {
        await this.v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPostRaw(requestParameters);
    }

    /**
     * Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition
     */
    async v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGetRaw(requestParameters: V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGetRequest): Promise<runtime.ApiResponse<CatalogueMatchListDTO>> {
        if (requestParameters.editionId === null || requestParameters.editionId === undefined) {
            throw new runtime.RequiredError('editionId','Required parameter requestParameters.editionId was null or undefined when calling v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/catalogue/editions/{editionId}/imaged-object-text-fragment-matches`.replace(`{${"editionId"}}`, encodeURIComponent(String(requestParameters.editionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogueMatchListDTOFromJSON(jsonValue));
    }

    /**
     * Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition
     */
    async v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet(requestParameters: V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGetRequest): Promise<CatalogueMatchListDTO> {
        const response = await this.v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a listing of all text fragments matches that correspond to an imaged object
     */
    async v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGetRaw(requestParameters: V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGetRequest): Promise<runtime.ApiResponse<CatalogueMatchListDTO>> {
        if (requestParameters.imagedObjectId === null || requestParameters.imagedObjectId === undefined) {
            throw new runtime.RequiredError('imagedObjectId','Required parameter requestParameters.imagedObjectId was null or undefined when calling v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/catalogue/imaged-objects/{imagedObjectId}/text-fragments`.replace(`{${"imagedObjectId"}}`, encodeURIComponent(String(requestParameters.imagedObjectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogueMatchListDTOFromJSON(jsonValue));
    }

    /**
     * Get a listing of all text fragments matches that correspond to an imaged object
     */
    async v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet(requestParameters: V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGetRequest): Promise<CatalogueMatchListDTO> {
        const response = await this.v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript
     */
    async v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGetRaw(requestParameters: V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGetRequest): Promise<runtime.ApiResponse<CatalogueMatchListDTO>> {
        if (requestParameters.manuscriptId === null || requestParameters.manuscriptId === undefined) {
            throw new runtime.RequiredError('manuscriptId','Required parameter requestParameters.manuscriptId was null or undefined when calling v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/catalogue/manuscripts/{manuscriptId}/imaged-object-text-fragment-matches`.replace(`{${"manuscriptId"}}`, encodeURIComponent(String(requestParameters.manuscriptId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogueMatchListDTOFromJSON(jsonValue));
    }

    /**
     * Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript
     */
    async v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet(requestParameters: V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGetRequest): Promise<CatalogueMatchListDTO> {
        const response = await this.v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new matched pair for an imaged object and a text fragment along with the edition princeps information
     */
    async v1CataloguePostRaw(requestParameters: V1CataloguePostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/catalogue`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CatalogueMatchInputDTOToJSON(requestParameters.catalogueMatchInputDTO),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a new matched pair for an imaged object and a text fragment along with the edition princeps information
     */
    async v1CataloguePost(requestParameters: V1CataloguePostRequest): Promise<void> {
        await this.v1CataloguePostRaw(requestParameters);
    }

    /**
     * Get a listing of all imaged objects that matches that correspond to a transcribed text fragment
     */
    async v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGetRaw(requestParameters: V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGetRequest): Promise<runtime.ApiResponse<CatalogueMatchListDTO>> {
        if (requestParameters.textFragmentId === null || requestParameters.textFragmentId === undefined) {
            throw new runtime.RequiredError('textFragmentId','Required parameter requestParameters.textFragmentId was null or undefined when calling v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/catalogue/text-fragments/{textFragmentId}/imaged-objects`.replace(`{${"textFragmentId"}}`, encodeURIComponent(String(requestParameters.textFragmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogueMatchListDTOFromJSON(jsonValue));
    }

    /**
     * Get a listing of all imaged objects that matches that correspond to a transcribed text fragment
     */
    async v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet(requestParameters: V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGetRequest): Promise<CatalogueMatchListDTO> {
        const response = await this.v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGetRaw(requestParameters);
        return await response.value();
    }

}
