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
from openapi_client.models.sign_interpretation_create_dto import SignInterpretationCreateDTO  # noqa: E501
from openapi_client.rest import ApiException

class TestSignInterpretationCreateDTO(unittest.TestCase):
    """SignInterpretationCreateDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test SignInterpretationCreateDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.sign_interpretation_create_dto.SignInterpretationCreateDTO()  # noqa: E501
        if include_optional :
            return SignInterpretationCreateDTO(
                line_id = 56, 
                previous_sign_interpretation_ids = [
                    56
                    ], 
                next_sign_interpretation_ids = [
                    56
                    ], 
                attributes = [
                    openapi_client.models.interpretation_attribute_create_dto.InterpretationAttributeCreateDTO(
                        commentary = '0', 
                        sequence = 56, 
                        attribute_id = 56, 
                        attribute_value_id = 56, )
                    ], 
                rois = [
                    openapi_client.models.set_interpretation_roi_dto.SetInterpretationRoiDTO(
                        artefact_id = 56, 
                        sign_interpretation_id = 56, 
                        shape = '0', 
                        translate = null, 
                        stance_rotation = 56, 
                        exceptional = True, 
                        values_set = True, )
                    ], 
                commentary = null, 
                break_previous_and_next_sign_interpretations = True, 
                character = '0', 
                is_variant = True
            )
        else :
            return SignInterpretationCreateDTO(
                attributes = [
                    openapi_client.models.interpretation_attribute_create_dto.InterpretationAttributeCreateDTO(
                        commentary = '0', 
                        sequence = 56, 
                        attribute_id = 56, 
                        attribute_value_id = 56, )
                    ],
                rois = [
                    openapi_client.models.set_interpretation_roi_dto.SetInterpretationRoiDTO(
                        artefact_id = 56, 
                        sign_interpretation_id = 56, 
                        shape = '0', 
                        translate = null, 
                        stance_rotation = 56, 
                        exceptional = True, 
                        values_set = True, )
                    ],
                is_variant = True,
        )

    def testSignInterpretationCreateDTO(self):
        """Test SignInterpretationCreateDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
