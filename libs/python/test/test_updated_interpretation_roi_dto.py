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
from openapi_client.models.updated_interpretation_roi_dto import UpdatedInterpretationRoiDTO  # noqa: E501
from openapi_client.rest import ApiException

class TestUpdatedInterpretationRoiDTO(unittest.TestCase):
    """UpdatedInterpretationRoiDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test UpdatedInterpretationRoiDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.updated_interpretation_roi_dto.UpdatedInterpretationRoiDTO()  # noqa: E501
        if include_optional :
            return UpdatedInterpretationRoiDTO(
                old_interpretation_roi_id = 56, 
                creator_id = 56, 
                editor_id = 56, 
                interpretation_roi_id = 56, 
                artefact_id = 56, 
                sign_interpretation_id = 56, 
                shape = '0', 
                translate = null, 
                stance_rotation = 56, 
                exceptional = True, 
                values_set = True
            )
        else :
            return UpdatedInterpretationRoiDTO(
                old_interpretation_roi_id = 56,
                creator_id = 56,
                editor_id = 56,
                interpretation_roi_id = 56,
                artefact_id = 56,
                sign_interpretation_id = 56,
                shape = '0',
                translate = null,
                exceptional = True,
                values_set = True,
        )

    def testUpdatedInterpretationRoiDTO(self):
        """Test UpdatedInterpretationRoiDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
