# coding: utf-8

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import qumranica_api_connector
from qumranica_api_connector.api.sign_interpretation_api import SignInterpretationApi  # noqa: E501
from qumranica_api_connector.rest import ApiException


class TestSignInterpretationApi(unittest.TestCase):
    """SignInterpretationApi unit test stubs"""

    def setUp(self):
        self.api = qumranica_api_connector.api.sign_interpretation_api.SignInterpretationApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_v1_editions_edition_id_sign_interpretations_attributes_attribute_id_delete(self):
        """Test case for v1_editions_edition_id_sign_interpretations_attributes_attribute_id_delete

        Delete an attribute from an edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_attributes_attribute_id_put(self):
        """Test case for v1_editions_edition_id_sign_interpretations_attributes_attribute_id_put

        Change the details of an attribute in an edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_attributes_get(self):
        """Test case for v1_editions_edition_id_sign_interpretations_attributes_get

        Retrieve a list of all possible attributes for an edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_attributes_post(self):
        """Test case for v1_editions_edition_id_sign_interpretations_attributes_post

        Create a new attribute for an edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_post(self):
        """Test case for v1_editions_edition_id_sign_interpretations_post

        Creates a new sign interpretation  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_delete(self):
        """Test case for v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_delete

        This deletes the specified attribute value from the specified sign interpretation.  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_put(self):
        """Test case for v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_put

        This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_post(self):
        """Test case for v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_post

        This adds a new attribute to the specified sign interpretation.  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_sign_interpretation_id_commentary_put(self):
        """Test case for v1_editions_edition_id_sign_interpretations_sign_interpretation_id_commentary_put

        Updates the commentary of a sign interpretation  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_sign_interpretation_id_delete(self):
        """Test case for v1_editions_edition_id_sign_interpretations_sign_interpretation_id_delete

        Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign's next and previous nodes.  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_sign_interpretation_id_get(self):
        """Test case for v1_editions_edition_id_sign_interpretations_sign_interpretation_id_get

        Retrieve the details of a sign interpretation in an edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_sign_interpretation_id_link_to_next_sign_interpretation_id_post(self):
        """Test case for v1_editions_edition_id_sign_interpretations_sign_interpretation_id_link_to_next_sign_interpretation_id_post

        Links two sign interpretations in the edition's sign stream  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_sign_interpretations_sign_interpretation_id_unlink_from_next_sign_interpretation_id_post(self):
        """Test case for v1_editions_edition_id_sign_interpretations_sign_interpretation_id_unlink_from_next_sign_interpretation_id_post

        Links two sign interpretations in the edition's sign stream  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
