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
from qumranica_api_connector.models.update_interpretation_roi_dto_list import UpdateInterpretationRoiDTOList  # noqa: E501
from qumranica_api_connector.rest import ApiException

class TestUpdateInterpretationRoiDTOList(unittest.TestCase):
    """UpdateInterpretationRoiDTOList unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test UpdateInterpretationRoiDTOList
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = qumranica_api_connector.models.update_interpretation_roi_dto_list.UpdateInterpretationRoiDTOList()  # noqa: E501
        if include_optional :
            return UpdateInterpretationRoiDTOList(
                rois = [
                    qumranica_api_connector.models.update_interpretation_roi_dto.UpdateInterpretationRoiDTO(
                        interpretation_roi_id = 56, 
                        artefact_id = 56, 
                        sign_interpretation_id = 56, 
                        shape = '0', 
                        translate = null, 
                        stance_rotation = 56, 
                        exceptional = True, 
                        values_set = True, )
                    ]
            )
        else :
            return UpdateInterpretationRoiDTOList(
                rois = [
                    qumranica_api_connector.models.update_interpretation_roi_dto.UpdateInterpretationRoiDTO(
                        interpretation_roi_id = 56, 
                        artefact_id = 56, 
                        sign_interpretation_id = 56, 
                        shape = '0', 
                        translate = null, 
                        stance_rotation = 56, 
                        exceptional = True, 
                        values_set = True, )
                    ],
        )

    def testUpdateInterpretationRoiDTOList(self):
        """Test UpdateInterpretationRoiDTOList"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
