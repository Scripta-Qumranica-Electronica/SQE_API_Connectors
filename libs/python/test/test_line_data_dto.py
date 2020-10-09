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
from openapi_client.models.line_data_dto import LineDataDTO  # noqa: E501
from openapi_client.rest import ApiException

class TestLineDataDTO(unittest.TestCase):
    """LineDataDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test LineDataDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.line_data_dto.LineDataDTO()  # noqa: E501
        if include_optional :
            return LineDataDTO(
                line_id = 56, 
                line_name = '0'
            )
        else :
            return LineDataDTO(
                line_id = 56,
                line_name = '0',
        )

    def testLineDataDTO(self):
        """Test LineDataDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()