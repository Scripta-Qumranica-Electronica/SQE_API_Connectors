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
from qumranica_api_connector.models.update_text_fragment_dto import UpdateTextFragmentDTO  # noqa: E501
from qumranica_api_connector.rest import ApiException

class TestUpdateTextFragmentDTO(unittest.TestCase):
    """UpdateTextFragmentDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test UpdateTextFragmentDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = qumranica_api_connector.models.update_text_fragment_dto.UpdateTextFragmentDTO()  # noqa: E501
        if include_optional :
            return UpdateTextFragmentDTO(
                name = '0', 
                previous_text_fragment_id = 56, 
                next_text_fragment_id = 56
            )
        else :
            return UpdateTextFragmentDTO(
        )

    def testUpdateTextFragmentDTO(self):
        """Test UpdateTextFragmentDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
