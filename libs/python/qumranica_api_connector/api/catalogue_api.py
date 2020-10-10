# coding: utf-8

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from qumranica_api_connector.api_client import ApiClient
from qumranica_api_connector.exceptions import (  # noqa: F401
    ApiTypeError,
    ApiValueError
)


class CatalogueApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete(self, iaa_edition_catalog_to_text_fragment_id, **kwargs):  # noqa: E501
        """Remove an existing imaged object and text fragment match, which is not correct  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete(iaa_edition_catalog_to_text_fragment_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int iaa_edition_catalog_to_text_fragment_id: The unique id of the match to confirm (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete_with_http_info(iaa_edition_catalog_to_text_fragment_id, **kwargs)  # noqa: E501

    def v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete_with_http_info(self, iaa_edition_catalog_to_text_fragment_id, **kwargs):  # noqa: E501
        """Remove an existing imaged object and text fragment match, which is not correct  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete_with_http_info(iaa_edition_catalog_to_text_fragment_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int iaa_edition_catalog_to_text_fragment_id: The unique id of the match to confirm (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'iaa_edition_catalog_to_text_fragment_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'iaa_edition_catalog_to_text_fragment_id' is set
        if self.api_client.client_side_validation and ('iaa_edition_catalog_to_text_fragment_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['iaa_edition_catalog_to_text_fragment_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `iaa_edition_catalog_to_text_fragment_id` when calling `v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'iaa_edition_catalog_to_text_fragment_id' in local_var_params:
            path_params['iaaEditionCatalogToTextFragmentId'] = local_var_params['iaa_edition_catalog_to_text_fragment_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # Authentication setting
        auth_settings = ['Bearer']  # noqa: E501

        return self.api_client.call_api(
            '/v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId}', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post(self, iaa_edition_catalog_to_text_fragment_id, **kwargs):  # noqa: E501
        """Confirm the correctness of an existing imaged object and text fragment match  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post(iaa_edition_catalog_to_text_fragment_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int iaa_edition_catalog_to_text_fragment_id: The unique id of the match to confirm (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post_with_http_info(iaa_edition_catalog_to_text_fragment_id, **kwargs)  # noqa: E501

    def v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post_with_http_info(self, iaa_edition_catalog_to_text_fragment_id, **kwargs):  # noqa: E501
        """Confirm the correctness of an existing imaged object and text fragment match  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post_with_http_info(iaa_edition_catalog_to_text_fragment_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int iaa_edition_catalog_to_text_fragment_id: The unique id of the match to confirm (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'iaa_edition_catalog_to_text_fragment_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'iaa_edition_catalog_to_text_fragment_id' is set
        if self.api_client.client_side_validation and ('iaa_edition_catalog_to_text_fragment_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['iaa_edition_catalog_to_text_fragment_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `iaa_edition_catalog_to_text_fragment_id` when calling `v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'iaa_edition_catalog_to_text_fragment_id' in local_var_params:
            path_params['iaaEditionCatalogToTextFragmentId'] = local_var_params['iaa_edition_catalog_to_text_fragment_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # Authentication setting
        auth_settings = ['Bearer']  # noqa: E501

        return self.api_client.call_api(
            '/v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId}', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get(self, edition_id, **kwargs):  # noqa: E501
        """Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get(edition_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int edition_id: Unique Id of the edition to search for imaged objects to text fragment matches (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: CatalogueMatchListDTO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get_with_http_info(edition_id, **kwargs)  # noqa: E501

    def v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get_with_http_info(self, edition_id, **kwargs):  # noqa: E501
        """Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get_with_http_info(edition_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int edition_id: Unique Id of the edition to search for imaged objects to text fragment matches (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(CatalogueMatchListDTO, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'edition_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'edition_id' is set
        if self.api_client.client_side_validation and ('edition_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['edition_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `edition_id` when calling `v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'edition_id' in local_var_params:
            path_params['editionId'] = local_var_params['edition_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['Bearer']  # noqa: E501

        return self.api_client.call_api(
            '/v1/catalogue/editions/{editionId}/imaged-object-text-fragment-matches', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='CatalogueMatchListDTO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get(self, imaged_object_id, **kwargs):  # noqa: E501
        """Get a listing of all text fragments matches that correspond to an imaged object  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get(imaged_object_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str imaged_object_id: Id of imaged object to search for transcription matches (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: CatalogueMatchListDTO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get_with_http_info(imaged_object_id, **kwargs)  # noqa: E501

    def v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get_with_http_info(self, imaged_object_id, **kwargs):  # noqa: E501
        """Get a listing of all text fragments matches that correspond to an imaged object  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get_with_http_info(imaged_object_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param str imaged_object_id: Id of imaged object to search for transcription matches (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(CatalogueMatchListDTO, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'imaged_object_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'imaged_object_id' is set
        if self.api_client.client_side_validation and ('imaged_object_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['imaged_object_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `imaged_object_id` when calling `v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'imaged_object_id' in local_var_params:
            path_params['imagedObjectId'] = local_var_params['imaged_object_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['Bearer']  # noqa: E501

        return self.api_client.call_api(
            '/v1/catalogue/imaged-objects/{imagedObjectId}/text-fragments', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='CatalogueMatchListDTO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get(self, manuscript_id, **kwargs):  # noqa: E501
        """Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get(manuscript_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int manuscript_id: Unique Id of the manuscript to search for imaged objects to text fragment matches (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: CatalogueMatchListDTO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get_with_http_info(manuscript_id, **kwargs)  # noqa: E501

    def v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get_with_http_info(self, manuscript_id, **kwargs):  # noqa: E501
        """Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get_with_http_info(manuscript_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int manuscript_id: Unique Id of the manuscript to search for imaged objects to text fragment matches (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(CatalogueMatchListDTO, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'manuscript_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'manuscript_id' is set
        if self.api_client.client_side_validation and ('manuscript_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['manuscript_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `manuscript_id` when calling `v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'manuscript_id' in local_var_params:
            path_params['manuscriptId'] = local_var_params['manuscript_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['Bearer']  # noqa: E501

        return self.api_client.call_api(
            '/v1/catalogue/manuscripts/{manuscriptId}/imaged-object-text-fragment-matches', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='CatalogueMatchListDTO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def v1_catalogue_post(self, **kwargs):  # noqa: E501
        """Create a new matched pair for an imaged object and a text fragment along with the edition princeps information  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_post(async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param CatalogueMatchInputDTO catalogue_match_input_dto: The details of the new match
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.v1_catalogue_post_with_http_info(**kwargs)  # noqa: E501

    def v1_catalogue_post_with_http_info(self, **kwargs):  # noqa: E501
        """Create a new matched pair for an imaged object and a text fragment along with the edition princeps information  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_post_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param CatalogueMatchInputDTO catalogue_match_input_dto: The details of the new match
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'catalogue_match_input_dto'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method v1_catalogue_post" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'catalogue_match_input_dto' in local_var_params:
            body_params = local_var_params['catalogue_match_input_dto']
        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json', 'text/json', 'application/*+json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['Bearer']  # noqa: E501

        return self.api_client.call_api(
            '/v1/catalogue', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get(self, text_fragment_id, **kwargs):  # noqa: E501
        """Get a listing of all imaged objects that matches that correspond to a transcribed text fragment  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get(text_fragment_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int text_fragment_id: Unique Id of the text fragment to search for imaged object matches (required)
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: CatalogueMatchListDTO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        return self.v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get_with_http_info(text_fragment_id, **kwargs)  # noqa: E501

    def v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get_with_http_info(self, text_fragment_id, **kwargs):  # noqa: E501
        """Get a listing of all imaged objects that matches that correspond to a transcribed text fragment  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get_with_http_info(text_fragment_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool: execute request asynchronously
        :param int text_fragment_id: Unique Id of the text fragment to search for imaged object matches (required)
        :param _return_http_data_only: response data without head status code
                                       and headers
        :param _preload_content: if False, the urllib3.HTTPResponse object will
                                 be returned without reading/decoding response
                                 data. Default is True.
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :return: tuple(CatalogueMatchListDTO, status_code(int), headers(HTTPHeaderDict))
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = [
            'text_fragment_id'
        ]
        all_params.extend(
            [
                'async_req',
                '_return_http_data_only',
                '_preload_content',
                '_request_timeout'
            ]
        )

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise ApiTypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'text_fragment_id' is set
        if self.api_client.client_side_validation and ('text_fragment_id' not in local_var_params or  # noqa: E501
                                                        local_var_params['text_fragment_id'] is None):  # noqa: E501
            raise ApiValueError("Missing the required parameter `text_fragment_id` when calling `v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'text_fragment_id' in local_var_params:
            path_params['textFragmentId'] = local_var_params['text_fragment_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['text/plain', 'application/json', 'text/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['Bearer']  # noqa: E501

        return self.api_client.call_api(
            '/v1/catalogue/text-fragments/{textFragmentId}/imaged-objects', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='CatalogueMatchListDTO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)
