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
from openapi_client.models.detailed_editor_rights_dto import DetailedEditorRightsDTO  # noqa: E501
from openapi_client.rest import ApiException

class TestDetailedEditorRightsDTO(unittest.TestCase):
    """DetailedEditorRightsDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test DetailedEditorRightsDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.detailed_editor_rights_dto.DetailedEditorRightsDTO()  # noqa: E501
        if include_optional :
            return DetailedEditorRightsDTO(
                email = 'a', 
                edition_id = 56, 
                may_lock = True, 
                may_read = True, 
                may_write = True, 
                is_admin = True
            )
        else :
            return DetailedEditorRightsDTO(
                email = 'a',
                edition_id = 56,
                may_lock = True,
                may_read = True,
                may_write = True,
                is_admin = True,
        )

    def testDetailedEditorRightsDTO(self):
        """Test DetailedEditorRightsDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
