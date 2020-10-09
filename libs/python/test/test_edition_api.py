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
from qumranica_api_connector.api.edition_api import EditionApi  # noqa: E501
from qumranica_api_connector.rest import ApiException


class TestEditionApi(unittest.TestCase):
    """EditionApi unit test stubs"""

    def setUp(self):
        self.api = qumranica_api_connector.api.edition_api.EditionApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_v1_editions_admin_share_requests_get(self):
        """Test case for v1_editions_admin_share_requests_get

        Get a list of requests issued by the current user for other users  to become editors of a shared edition  # noqa: E501
        """
        pass

    def test_v1_editions_confirm_editorship_token_post(self):
        """Test case for v1_editions_confirm_editorship_token_post

        Confirm addition of an editor to the specified edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_add_editor_request_post(self):
        """Test case for v1_editions_edition_id_add_editor_request_post

        Adds an editor to the specified edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_delete(self):
        """Test case for v1_editions_edition_id_delete

        Provides details about the specified edition and all accessible alternate editions  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_editors_editor_email_id_put(self):
        """Test case for v1_editions_edition_id_editors_editor_email_id_put

        Changes the rights for an editor of the specified edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_get(self):
        """Test case for v1_editions_edition_id_get

        Provides details about the specified edition and all accessible alternate editions  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_post(self):
        """Test case for v1_editions_edition_id_post

        Creates a copy of the specified edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_put(self):
        """Test case for v1_editions_edition_id_put

        Updates data for the specified edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_script_collection_get(self):
        """Test case for v1_editions_edition_id_script_collection_get

        Provides spatial data for all letters in the edition  # noqa: E501
        """
        pass

    def test_v1_editions_edition_id_script_lines_get(self):
        """Test case for v1_editions_edition_id_script_lines_get

        Provides spatial data for all letters in the edition organized and oriented  by lines.  # noqa: E501
        """
        pass

    def test_v1_editions_editor_invitations_get(self):
        """Test case for v1_editions_editor_invitations_get

        Get a list of invitations issued to the current user to become an editor of a shared edition  # noqa: E501
        """
        pass

    def test_v1_editions_get(self):
        """Test case for v1_editions_get

        Provides a listing of all editions accessible to the current user  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
