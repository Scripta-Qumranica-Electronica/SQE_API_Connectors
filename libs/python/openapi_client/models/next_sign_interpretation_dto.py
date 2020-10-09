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


class NextSignInterpretationDTO(object):
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
        'next_sign_interpretation_id': 'int',
        'creator_id': 'int',
        'editor_id': 'int'
    }

    attribute_map = {
        'next_sign_interpretation_id': 'nextSignInterpretationId',
        'creator_id': 'creatorId',
        'editor_id': 'editorId'
    }

    def __init__(self, next_sign_interpretation_id=None, creator_id=None, editor_id=None, local_vars_configuration=None):  # noqa: E501
        """NextSignInterpretationDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._next_sign_interpretation_id = None
        self._creator_id = None
        self._editor_id = None
        self.discriminator = None

        self.next_sign_interpretation_id = next_sign_interpretation_id
        self.creator_id = creator_id
        self.editor_id = editor_id

    @property
    def next_sign_interpretation_id(self):
        """Gets the next_sign_interpretation_id of this NextSignInterpretationDTO.  # noqa: E501


        :return: The next_sign_interpretation_id of this NextSignInterpretationDTO.  # noqa: E501
        :rtype: int
        """
        return self._next_sign_interpretation_id

    @next_sign_interpretation_id.setter
    def next_sign_interpretation_id(self, next_sign_interpretation_id):
        """Sets the next_sign_interpretation_id of this NextSignInterpretationDTO.


        :param next_sign_interpretation_id: The next_sign_interpretation_id of this NextSignInterpretationDTO.  # noqa: E501
        :type next_sign_interpretation_id: int
        """
        if self.local_vars_configuration.client_side_validation and next_sign_interpretation_id is None:  # noqa: E501
            raise ValueError("Invalid value for `next_sign_interpretation_id`, must not be `None`")  # noqa: E501

        self._next_sign_interpretation_id = next_sign_interpretation_id

    @property
    def creator_id(self):
        """Gets the creator_id of this NextSignInterpretationDTO.  # noqa: E501


        :return: The creator_id of this NextSignInterpretationDTO.  # noqa: E501
        :rtype: int
        """
        return self._creator_id

    @creator_id.setter
    def creator_id(self, creator_id):
        """Sets the creator_id of this NextSignInterpretationDTO.


        :param creator_id: The creator_id of this NextSignInterpretationDTO.  # noqa: E501
        :type creator_id: int
        """
        if self.local_vars_configuration.client_side_validation and creator_id is None:  # noqa: E501
            raise ValueError("Invalid value for `creator_id`, must not be `None`")  # noqa: E501

        self._creator_id = creator_id

    @property
    def editor_id(self):
        """Gets the editor_id of this NextSignInterpretationDTO.  # noqa: E501


        :return: The editor_id of this NextSignInterpretationDTO.  # noqa: E501
        :rtype: int
        """
        return self._editor_id

    @editor_id.setter
    def editor_id(self, editor_id):
        """Sets the editor_id of this NextSignInterpretationDTO.


        :param editor_id: The editor_id of this NextSignInterpretationDTO.  # noqa: E501
        :type editor_id: int
        """
        if self.local_vars_configuration.client_side_validation and editor_id is None:  # noqa: E501
            raise ValueError("Invalid value for `editor_id`, must not be `None`")  # noqa: E501

        self._editor_id = editor_id

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
        if not isinstance(other, NextSignInterpretationDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, NextSignInterpretationDTO):
            return True

        return self.to_dict() != other.to_dict()
