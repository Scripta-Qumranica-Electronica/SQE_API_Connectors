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
from openapi_client.models.update_artefact_placement_dto import UpdateArtefactPlacementDTO  # noqa: E501
from openapi_client.rest import ApiException

class TestUpdateArtefactPlacementDTO(unittest.TestCase):
    """UpdateArtefactPlacementDTO unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test UpdateArtefactPlacementDTO
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = openapi_client.models.update_artefact_placement_dto.UpdateArtefactPlacementDTO()  # noqa: E501
        if include_optional :
            return UpdateArtefactPlacementDTO(
                artefact_id = 56, 
                is_placed = True, 
                placement = null
            )
        else :
            return UpdateArtefactPlacementDTO(
                artefact_id = 56,
                is_placed = True,
        )

    def testUpdateArtefactPlacementDTO(self):
        """Test UpdateArtefactPlacementDTO"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)


if __name__ == '__main__':
    unittest.main()
