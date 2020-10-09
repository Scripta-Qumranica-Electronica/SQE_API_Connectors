# coding: utf-8

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class ImagedObjectTextFragmentMatchDTO(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'edition_id': 'int',
        'manuscript_name': 'str',
        'text_fragment_id': 'int',
        'text_fragment_name': 'str',
        'side': 'SideDesignation'
    }

    attribute_map = {
        'edition_id': 'editionId',
        'manuscript_name': 'manuscriptName',
        'text_fragment_id': 'textFragmentId',
        'text_fragment_name': 'textFragmentName',
        'side': 'side'
    }

    def __init__(self, edition_id=None, manuscript_name=None, text_fragment_id=None, text_fragment_name=None, side=None, local_vars_configuration=None):  # noqa: E501
        """ImagedObjectTextFragmentMatchDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._edition_id = None
        self._manuscript_name = None
        self._text_fragment_id = None
        self._text_fragment_name = None
        self._side = None
        self.discriminator = None

        self.edition_id = edition_id
        self.manuscript_name = manuscript_name
        self.text_fragment_id = text_fragment_id
        self.text_fragment_name = text_fragment_name
        self.side = side

    @property
    def edition_id(self):
        """Gets the edition_id of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501


        :return: The edition_id of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._edition_id

    @edition_id.setter
    def edition_id(self, edition_id):
        """Sets the edition_id of this ImagedObjectTextFragmentMatchDTO.


        :param edition_id: The edition_id of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :type edition_id: int
        """
        if self.local_vars_configuration.client_side_validation and edition_id is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_id`, must not be `None`")  # noqa: E501

        self._edition_id = edition_id

    @property
    def manuscript_name(self):
        """Gets the manuscript_name of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501


        :return: The manuscript_name of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._manuscript_name

    @manuscript_name.setter
    def manuscript_name(self, manuscript_name):
        """Sets the manuscript_name of this ImagedObjectTextFragmentMatchDTO.


        :param manuscript_name: The manuscript_name of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :type manuscript_name: str
        """
        if self.local_vars_configuration.client_side_validation and manuscript_name is None:  # noqa: E501
            raise ValueError("Invalid value for `manuscript_name`, must not be `None`")  # noqa: E501

        self._manuscript_name = manuscript_name

    @property
    def text_fragment_id(self):
        """Gets the text_fragment_id of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501


        :return: The text_fragment_id of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._text_fragment_id

    @text_fragment_id.setter
    def text_fragment_id(self, text_fragment_id):
        """Sets the text_fragment_id of this ImagedObjectTextFragmentMatchDTO.


        :param text_fragment_id: The text_fragment_id of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :type text_fragment_id: int
        """
        if self.local_vars_configuration.client_side_validation and text_fragment_id is None:  # noqa: E501
            raise ValueError("Invalid value for `text_fragment_id`, must not be `None`")  # noqa: E501

        self._text_fragment_id = text_fragment_id

    @property
    def text_fragment_name(self):
        """Gets the text_fragment_name of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501


        :return: The text_fragment_name of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._text_fragment_name

    @text_fragment_name.setter
    def text_fragment_name(self, text_fragment_name):
        """Sets the text_fragment_name of this ImagedObjectTextFragmentMatchDTO.


        :param text_fragment_name: The text_fragment_name of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :type text_fragment_name: str
        """
        if self.local_vars_configuration.client_side_validation and text_fragment_name is None:  # noqa: E501
            raise ValueError("Invalid value for `text_fragment_name`, must not be `None`")  # noqa: E501

        self._text_fragment_name = text_fragment_name

    @property
    def side(self):
        """Gets the side of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501


        :return: The side of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :rtype: SideDesignation
        """
        return self._side

    @side.setter
    def side(self, side):
        """Sets the side of this ImagedObjectTextFragmentMatchDTO.


        :param side: The side of this ImagedObjectTextFragmentMatchDTO.  # noqa: E501
        :type side: SideDesignation
        """
        if self.local_vars_configuration.client_side_validation and side is None:  # noqa: E501
            raise ValueError("Invalid value for `side`, must not be `None`")  # noqa: E501

        self._side = side

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ImagedObjectTextFragmentMatchDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ImagedObjectTextFragmentMatchDTO):
            return True

        return self.to_dict() != other.to_dict()