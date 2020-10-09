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
from openapi_client.models.catalogue_match_dto import CatalogueMatchDTO  # noqa: E501
from openapi_client.rest import ApiException

class TestCatalogueMatchDTO(unittest.TestCase):
    """CatalogueMatchDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test CatalogueMatchDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.catalogue_match_dto.CatalogueMatchDTO()  # noqa: E501
        if include_optional :
            return CatalogueMatchDTO(
                image_catalog_id = 56, 
                institution = '0', 
                catalogue_number1 = '0', 
                catalogue_number2 = '0', 
                proxy = '0', 
                url = '0', 
                filename = '0', 
                suffix = '0', 
                thumbnail = '0', 
                license = '0', 
                iaa_edition_catalogue_id = 56, 
                manuscript_name = '0', 
                name = '0', 
                match_author = '0', 
                match_confirmation_author = '0', 
                match_id = 56, 
                date_of_match = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                date_of_confirmation = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
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
            return CatalogueMatchDTO(
                image_catalog_id = 56,
                institution = '0',
                catalogue_number1 = '0',
                url = '0',
                filename = '0',
                suffix = '0',
                thumbnail = '0',
                license = '0',
                iaa_edition_catalogue_id = 56,
                manuscript_name = '0',
                name = '0',
                match_author = '0',
                match_id = 56,
                date_of_match = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
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

    def testCatalogueMatchDTO(self):
        """Test CatalogueMatchDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()