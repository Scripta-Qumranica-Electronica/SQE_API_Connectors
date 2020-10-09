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


class InterpretationAttributeDTO(object):
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
        'interpretation_attribute_id': 'int',
        'attribute_string': 'str',
        'attribute_value_string': 'str',
        'creator_id': 'int',
        'editor_id': 'int',
        'commentary': 'CommentaryDTO',
        'sequence': 'int',
        'attribute_id': 'int',
        'attribute_value_id': 'int'
    }

    attribute_map = {
        'interpretation_attribute_id': 'interpretationAttributeId',
        'attribute_string': 'attributeString',
        'attribute_value_string': 'attributeValueString',
        'creator_id': 'creatorId',
        'editor_id': 'editorId',
        'commentary': 'commentary',
        'sequence': 'sequence',
        'attribute_id': 'attributeId',
        'attribute_value_id': 'attributeValueId'
    }

    def __init__(self, interpretation_attribute_id=None, attribute_string=None, attribute_value_string=None, creator_id=None, editor_id=None, commentary=None, sequence=None, attribute_id=None, attribute_value_id=None, local_vars_configuration=None):  # noqa: E501
        """InterpretationAttributeDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._interpretation_attribute_id = None
        self._attribute_string = None
        self._attribute_value_string = None
        self._creator_id = None
        self._editor_id = None
        self._commentary = None
        self._sequence = None
        self._attribute_id = None
        self._attribute_value_id = None
        self.discriminator = None

        self.interpretation_attribute_id = interpretation_attribute_id
        self.attribute_string = attribute_string
        self.attribute_value_string = attribute_value_string
        self.creator_id = creator_id
        self.editor_id = editor_id
        self.commentary = commentary
        self.sequence = sequence
        self.attribute_id = attribute_id
        self.attribute_value_id = attribute_value_id

    @property
    def interpretation_attribute_id(self):
        """Gets the interpretation_attribute_id of this InterpretationAttributeDTO.  # noqa: E501


        :return: The interpretation_attribute_id of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: int
        """
        return self._interpretation_attribute_id

    @interpretation_attribute_id.setter
    def interpretation_attribute_id(self, interpretation_attribute_id):
        """Sets the interpretation_attribute_id of this InterpretationAttributeDTO.


        :param interpretation_attribute_id: The interpretation_attribute_id of this InterpretationAttributeDTO.  # noqa: E501
        :type interpretation_attribute_id: int
        """
        if self.local_vars_configuration.client_side_validation and interpretation_attribute_id is None:  # noqa: E501
            raise ValueError("Invalid value for `interpretation_attribute_id`, must not be `None`")  # noqa: E501

        self._interpretation_attribute_id = interpretation_attribute_id

    @property
    def attribute_string(self):
        """Gets the attribute_string of this InterpretationAttributeDTO.  # noqa: E501


        :return: The attribute_string of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: str
        """
        return self._attribute_string

    @attribute_string.setter
    def attribute_string(self, attribute_string):
        """Sets the attribute_string of this InterpretationAttributeDTO.


        :param attribute_string: The attribute_string of this InterpretationAttributeDTO.  # noqa: E501
        :type attribute_string: str
        """
        if self.local_vars_configuration.client_side_validation and attribute_string is None:  # noqa: E501
            raise ValueError("Invalid value for `attribute_string`, must not be `None`")  # noqa: E501

        self._attribute_string = attribute_string

    @property
    def attribute_value_string(self):
        """Gets the attribute_value_string of this InterpretationAttributeDTO.  # noqa: E501


        :return: The attribute_value_string of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: str
        """
        return self._attribute_value_string

    @attribute_value_string.setter
    def attribute_value_string(self, attribute_value_string):
        """Sets the attribute_value_string of this InterpretationAttributeDTO.


        :param attribute_value_string: The attribute_value_string of this InterpretationAttributeDTO.  # noqa: E501
        :type attribute_value_string: str
        """
        if self.local_vars_configuration.client_side_validation and attribute_value_string is None:  # noqa: E501
            raise ValueError("Invalid value for `attribute_value_string`, must not be `None`")  # noqa: E501

        self._attribute_value_string = attribute_value_string

    @property
    def creator_id(self):
        """Gets the creator_id of this InterpretationAttributeDTO.  # noqa: E501


        :return: The creator_id of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: int
        """
        return self._creator_id

    @creator_id.setter
    def creator_id(self, creator_id):
        """Sets the creator_id of this InterpretationAttributeDTO.


        :param creator_id: The creator_id of this InterpretationAttributeDTO.  # noqa: E501
        :type creator_id: int
        """
        if self.local_vars_configuration.client_side_validation and creator_id is None:  # noqa: E501
            raise ValueError("Invalid value for `creator_id`, must not be `None`")  # noqa: E501

        self._creator_id = creator_id

    @property
    def editor_id(self):
        """Gets the editor_id of this InterpretationAttributeDTO.  # noqa: E501


        :return: The editor_id of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: int
        """
        return self._editor_id

    @editor_id.setter
    def editor_id(self, editor_id):
        """Sets the editor_id of this InterpretationAttributeDTO.


        :param editor_id: The editor_id of this InterpretationAttributeDTO.  # noqa: E501
        :type editor_id: int
        """
        if self.local_vars_configuration.client_side_validation and editor_id is None:  # noqa: E501
            raise ValueError("Invalid value for `editor_id`, must not be `None`")  # noqa: E501

        self._editor_id = editor_id

    @property
    def commentary(self):
        """Gets the commentary of this InterpretationAttributeDTO.  # noqa: E501


        :return: The commentary of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: CommentaryDTO
        """
        return self._commentary

    @commentary.setter
    def commentary(self, commentary):
        """Sets the commentary of this InterpretationAttributeDTO.


        :param commentary: The commentary of this InterpretationAttributeDTO.  # noqa: E501
        :type commentary: CommentaryDTO
        """

        self._commentary = commentary

    @property
    def sequence(self):
        """Gets the sequence of this InterpretationAttributeDTO.  # noqa: E501


        :return: The sequence of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: int
        """
        return self._sequence

    @sequence.setter
    def sequence(self, sequence):
        """Sets the sequence of this InterpretationAttributeDTO.


        :param sequence: The sequence of this InterpretationAttributeDTO.  # noqa: E501
        :type sequence: int
        """

        self._sequence = sequence

    @property
    def attribute_id(self):
        """Gets the attribute_id of this InterpretationAttributeDTO.  # noqa: E501


        :return: The attribute_id of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: int
        """
        return self._attribute_id

    @attribute_id.setter
    def attribute_id(self, attribute_id):
        """Sets the attribute_id of this InterpretationAttributeDTO.


        :param attribute_id: The attribute_id of this InterpretationAttributeDTO.  # noqa: E501
        :type attribute_id: int
        """
        if self.local_vars_configuration.client_side_validation and attribute_id is None:  # noqa: E501
            raise ValueError("Invalid value for `attribute_id`, must not be `None`")  # noqa: E501

        self._attribute_id = attribute_id

    @property
    def attribute_value_id(self):
        """Gets the attribute_value_id of this InterpretationAttributeDTO.  # noqa: E501


        :return: The attribute_value_id of this InterpretationAttributeDTO.  # noqa: E501
        :rtype: int
        """
        return self._attribute_value_id

    @attribute_value_id.setter
    def attribute_value_id(self, attribute_value_id):
        """Sets the attribute_value_id of this InterpretationAttributeDTO.


        :param attribute_value_id: The attribute_value_id of this InterpretationAttributeDTO.  # noqa: E501
        :type attribute_value_id: int
        """
        if self.local_vars_configuration.client_side_validation and attribute_value_id is None:  # noqa: E501
            raise ValueError("Invalid value for `attribute_value_id`, must not be `None`")  # noqa: E501

        self._attribute_value_id = attribute_value_id

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
        if not isinstance(other, InterpretationAttributeDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, InterpretationAttributeDTO):
            return True

        return self.to_dict() != other.to_dict()
