# coding: utf-8

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import openapi_client
from openapi_client.models.catalogue_match_input_dto import CatalogueMatchInputDTO  # noqa: E501
from openapi_client.rest import ApiException

class TestCatalogueMatchInputDTO(unittest.TestCase):
    """CatalogueMatchInputDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test CatalogueMatchInputDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.catalogue_match_input_dto.CatalogueMatchInputDTO()  # noqa: E501
        if include_optional :
            return CatalogueMatchInputDTO(
                catalog_side = null, 
                imaged_object_id = '0', 
                manuscript_id = 56, 
                edition_name = '0', 
                edition_volume = '0', 
                edition_location1 = '0', 
                edition_location2 = '0', 
                edition_side = null, 
                comment = '0', 
                text_fragment_id = 56, 
                edition_id = 56, 
                confirmed = True
            )
        else :
            return CatalogueMatchInputDTO(
                imaged_object_id = '0',
                manuscript_id = 56,
                edition_name = '0',
                edition_volume = '0',
                edition_location1 = '0',
                edition_location2 = '0',
                edition_side = null,
                text_fragment_id = 56,
                edition_id = 56,
        )

    def testCatalogueMatchInputDTO(self):
        """Test CatalogueMatchInputDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()