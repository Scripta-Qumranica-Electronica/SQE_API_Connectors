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
from qumranica_api_connector.models.script_text_fragment_dto import ScriptTextFragmentDTO  # noqa: E501
from qumranica_api_connector.rest import ApiException

class TestScriptTextFragmentDTO(unittest.TestCase):
    """ScriptTextFragmentDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test ScriptTextFragmentDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = qumranica_api_connector.models.script_text_fragment_dto.ScriptTextFragmentDTO()  # noqa: E501
        if include_optional :
            return ScriptTextFragmentDTO(
                text_fragment_name = '0', 
                text_fragment_id = 56, 
                lines = [
                    qumranica_api_connector.models.script_line_dto.ScriptLineDTO(
                        line_name = '0', 
                        line_id = 56, 
                        artefacts = [
                            qumranica_api_connector.models.script_artefact_characters_dto.ScriptArtefactCharactersDTO(
                                artefact_name = '0', 
                                artefact_id = 56, 
                                placement = null, 
                                characters = [
                                    qumranica_api_connector.models.sign_interpretation_dto.SignInterpretationDTO(
                                        sign_interpretation_id = 56, 
                                        next_sign_interpretations = [
                                            qumranica_api_connector.models.next_sign_interpretation_dto.NextSignInterpretationDTO(
                                                next_sign_interpretation_id = 56, 
                                                creator_id = 56, 
                                                editor_id = 56, )
                                            ], 
                                        attributes = [
                                            qumranica_api_connector.models.interpretation_attribute_dto.InterpretationAttributeDTO(
                                                interpretation_attribute_id = 56, 
                                                attribute_string = '0', 
                                                attribute_value_string = '0', 
                                                creator_id = 56, 
                                                editor_id = 56, 
                                                commentary = null, 
                                                sequence = 56, 
                                                attribute_id = 56, 
                                                attribute_value_id = 56, )
                                            ], 
                                        rois = [
                                            qumranica_api_connector.models.interpretation_roi_dto.InterpretationRoiDTO(
                                                creator_id = 56, 
                                                editor_id = 56, 
                                                interpretation_roi_id = 56, 
                                                artefact_id = 56, 
                                                sign_interpretation_id = 56, 
                                                shape = '0', 
                                                translate = null, 
                                                stance_rotation = 56, 
                                                exceptional = True, 
                                                values_set = True, )
                                            ], 
                                        commentary = null, 
                                        character = '0', 
                                        is_variant = True, )
                                    ], )
                            ], )
                    ]
            )
        else :
            return ScriptTextFragmentDTO(
                text_fragment_name = '0',
                text_fragment_id = 56,
                lines = [
                    qumranica_api_connector.models.script_line_dto.ScriptLineDTO(
                        line_name = '0', 
                        line_id = 56, 
                        artefacts = [
                            qumranica_api_connector.models.script_artefact_characters_dto.ScriptArtefactCharactersDTO(
                                artefact_name = '0', 
                                artefact_id = 56, 
                                placement = null, 
                                characters = [
                                    qumranica_api_connector.models.sign_interpretation_dto.SignInterpretationDTO(
                                        sign_interpretation_id = 56, 
                                        next_sign_interpretations = [
                                            qumranica_api_connector.models.next_sign_interpretation_dto.NextSignInterpretationDTO(
                                                next_sign_interpretation_id = 56, 
                                                creator_id = 56, 
                                                editor_id = 56, )
                                            ], 
                                        attributes = [
                                            qumranica_api_connector.models.interpretation_attribute_dto.InterpretationAttributeDTO(
                                                interpretation_attribute_id = 56, 
                                                attribute_string = '0', 
                                                attribute_value_string = '0', 
                                                creator_id = 56, 
                                                editor_id = 56, 
                                                commentary = null, 
                                                sequence = 56, 
                                                attribute_id = 56, 
                                                attribute_value_id = 56, )
                                            ], 
                                        rois = [
                                            qumranica_api_connector.models.interpretation_roi_dto.InterpretationRoiDTO(
                                                creator_id = 56, 
                                                editor_id = 56, 
                                                interpretation_roi_id = 56, 
                                                artefact_id = 56, 
                                                sign_interpretation_id = 56, 
                                                shape = '0', 
                                                translate = null, 
                                                stance_rotation = 56, 
                                                exceptional = True, 
                                                values_set = True, )
                                            ], 
                                        commentary = null, 
                                        character = '0', 
                                        is_variant = True, )
                                    ], )
                            ], )
                    ],
        )

    def testScriptTextFragmentDTO(self):
        """Test ScriptTextFragmentDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
