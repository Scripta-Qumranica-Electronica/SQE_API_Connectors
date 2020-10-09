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
from openapi_client.models.interpretation_attribute_create_dto import InterpretationAttributeCreateDTO  # noqa: E501
from openapi_client.rest import ApiException

class TestInterpretationAttributeCreateDTO(unittest.TestCase):
    """InterpretationAttributeCreateDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test InterpretationAttributeCreateDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.interpretation_attribute_create_dto.InterpretationAttributeCreateDTO()  # noqa: E501
        if include_optional :
            return InterpretationAttributeCreateDTO(
                commentary = '0', 
                sequence = 56, 
                attribute_id = 56, 
                attribute_value_id = 56
            )
        else :
            return InterpretationAttributeCreateDTO(
                attribute_id = 56,
                attribute_value_id = 56,
        )

    def testInterpretationAttributeCreateDTO(self):
        """Test InterpretationAttributeCreateDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()