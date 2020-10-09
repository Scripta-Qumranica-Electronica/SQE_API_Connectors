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
from qumranica_api_connector.models.attribute_dto import AttributeDTO  # noqa: E501
from qumranica_api_connector.rest import ApiException

class TestAttributeDTO(unittest.TestCase):
    """AttributeDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test AttributeDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = qumranica_api_connector.models.attribute_dto.AttributeDTO()  # noqa: E501
        if include_optional :
            return AttributeDTO(
                attribute_id = 56, 
                attribute_name = '0', 
                values = [
                    qumranica_api_connector.models.attribute_value_dto.AttributeValueDTO(
                        creator_id = 56, 
                        editor_id = 56, 
                        id = 56, 
                        value = '0', 
                        description = '0', 
                        css_directives = '0', )
                    ], 
                creator_id = 56, 
                editor_id = 56, 
                description = '0', 
                editable = True, 
                removable = True, 
                repeatable = True, 
                batch_editable = True
            )
        else :
            return AttributeDTO(
                attribute_id = 56,
                attribute_name = '0',
                values = [
                    qumranica_api_connector.models.attribute_value_dto.AttributeValueDTO(
                        creator_id = 56, 
                        editor_id = 56, 
                        id = 56, 
                        value = '0', 
                        description = '0', 
                        css_directives = '0', )
                    ],
                creator_id = 56,
                editor_id = 56,
        )

    def testAttributeDTO(self):
        """Test AttributeDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
