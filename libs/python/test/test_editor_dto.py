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

import qumranica_api_connector
from qumranica_api_connector.models.editor_dto import EditorDTO  # noqa: E501
from qumranica_api_connector.rest import ApiException

class TestEditorDTO(unittest.TestCase):
    """EditorDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test EditorDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = qumranica_api_connector.models.editor_dto.EditorDTO()  # noqa: E501
        if include_optional :
            return EditorDTO(
                email = '0', 
                forename = '0', 
                surname = '0', 
                organization = '0'
            )
        else :
            return EditorDTO(
                email = '0',
        )

    def testEditorDTO(self):
        """Test EditorDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
