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


class LineTextDTO(object):
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
        'licence': 'str',
        'editors': 'dict(str, EditorDTO)',
        'line_id': 'int',
        'line_name': 'str',
        'editor_id': 'int',
        'signs': 'list[SignDTO]'
    }

    attribute_map = {
        'licence': 'licence',
        'editors': 'editors',
        'line_id': 'lineId',
        'line_name': 'lineName',
        'editor_id': 'editorId',
        'signs': 'signs'
    }

    def __init__(self, licence=None, editors=None, line_id=None, line_name=None, editor_id=None, signs=None, local_vars_configuration=None):  # noqa: E501
        """LineTextDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._licence = None
        self._editors = None
        self._line_id = None
        self._line_name = None
        self._editor_id = None
        self._signs = None
        self.discriminator = None

        self.licence = licence
        self.editors = editors
        self.line_id = line_id
        self.line_name = line_name
        self.editor_id = editor_id
        self.signs = signs

    @property
    def licence(self):
        """Gets the licence of this LineTextDTO.  # noqa: E501


        :return: The licence of this LineTextDTO.  # noqa: E501
        :rtype: str
        """
        return self._licence

    @licence.setter
    def licence(self, licence):
        """Sets the licence of this LineTextDTO.


        :param licence: The licence of this LineTextDTO.  # noqa: E501
        :type licence: str
        """
        if self.local_vars_configuration.client_side_validation and licence is None:  # noqa: E501
            raise ValueError("Invalid value for `licence`, must not be `None`")  # noqa: E501

        self._licence = licence

    @property
    def editors(self):
        """Gets the editors of this LineTextDTO.  # noqa: E501


        :return: The editors of this LineTextDTO.  # noqa: E501
        :rtype: dict(str, EditorDTO)
        """
        return self._editors

    @editors.setter
    def editors(self, editors):
        """Sets the editors of this LineTextDTO.


        :param editors: The editors of this LineTextDTO.  # noqa: E501
        :type editors: dict(str, EditorDTO)
        """
        if self.local_vars_configuration.client_side_validation and editors is None:  # noqa: E501
            raise ValueError("Invalid value for `editors`, must not be `None`")  # noqa: E501

        self._editors = editors

    @property
    def line_id(self):
        """Gets the line_id of this LineTextDTO.  # noqa: E501


        :return: The line_id of this LineTextDTO.  # noqa: E501
        :rtype: int
        """
        return self._line_id

    @line_id.setter
    def line_id(self, line_id):
        """Sets the line_id of this LineTextDTO.


        :param line_id: The line_id of this LineTextDTO.  # noqa: E501
        :type line_id: int
        """
        if self.local_vars_configuration.client_side_validation and line_id is None:  # noqa: E501
            raise ValueError("Invalid value for `line_id`, must not be `None`")  # noqa: E501

        self._line_id = line_id

    @property
    def line_name(self):
        """Gets the line_name of this LineTextDTO.  # noqa: E501


        :return: The line_name of this LineTextDTO.  # noqa: E501
        :rtype: str
        """
        return self._line_name

    @line_name.setter
    def line_name(self, line_name):
        """Sets the line_name of this LineTextDTO.


        :param line_name: The line_name of this LineTextDTO.  # noqa: E501
        :type line_name: str
        """
        if self.local_vars_configuration.client_side_validation and line_name is None:  # noqa: E501
            raise ValueError("Invalid value for `line_name`, must not be `None`")  # noqa: E501

        self._line_name = line_name

    @property
    def editor_id(self):
        """Gets the editor_id of this LineTextDTO.  # noqa: E501


        :return: The editor_id of this LineTextDTO.  # noqa: E501
        :rtype: int
        """
        return self._editor_id

    @editor_id.setter
    def editor_id(self, editor_id):
        """Sets the editor_id of this LineTextDTO.


        :param editor_id: The editor_id of this LineTextDTO.  # noqa: E501
        :type editor_id: int
        """
        if self.local_vars_configuration.client_side_validation and editor_id is None:  # noqa: E501
            raise ValueError("Invalid value for `editor_id`, must not be `None`")  # noqa: E501

        self._editor_id = editor_id

    @property
    def signs(self):
        """Gets the signs of this LineTextDTO.  # noqa: E501


        :return: The signs of this LineTextDTO.  # noqa: E501
        :rtype: list[SignDTO]
        """
        return self._signs

    @signs.setter
    def signs(self, signs):
        """Sets the signs of this LineTextDTO.


        :param signs: The signs of this LineTextDTO.  # noqa: E501
        :type signs: list[SignDTO]
        """
        if self.local_vars_configuration.client_side_validation and signs is None:  # noqa: E501
            raise ValueError("Invalid value for `signs`, must not be `None`")  # noqa: E501

        self._signs = signs

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
        if not isinstance(other, LineTextDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, LineTextDTO):
            return True

        return self.to_dict() != other.to_dict()
