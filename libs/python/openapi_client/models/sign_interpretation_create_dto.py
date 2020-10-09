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


class SignInterpretationCreateDTO(object):
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
        'line_id': 'int',
        'previous_sign_interpretation_ids': 'list[int]',
        'next_sign_interpretation_ids': 'list[int]',
        'attributes': 'list[InterpretationAttributeCreateDTO]',
        'rois': 'list[SetInterpretationRoiDTO]',
        'commentary': 'CommentaryCreateDTO',
        'break_previous_and_next_sign_interpretations': 'bool',
        'character': 'str',
        'is_variant': 'bool'
    }

    attribute_map = {
        'line_id': 'lineId',
        'previous_sign_interpretation_ids': 'previousSignInterpretationIds',
        'next_sign_interpretation_ids': 'nextSignInterpretationIds',
        'attributes': 'attributes',
        'rois': 'rois',
        'commentary': 'commentary',
        'break_previous_and_next_sign_interpretations': 'breakPreviousAndNextSignInterpretations',
        'character': 'character',
        'is_variant': 'isVariant'
    }

    def __init__(self, line_id=None, previous_sign_interpretation_ids=None, next_sign_interpretation_ids=None, attributes=None, rois=None, commentary=None, break_previous_and_next_sign_interpretations=None, character=None, is_variant=None, local_vars_configuration=None):  # noqa: E501
        """SignInterpretationCreateDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._line_id = None
        self._previous_sign_interpretation_ids = None
        self._next_sign_interpretation_ids = None
        self._attributes = None
        self._rois = None
        self._commentary = None
        self._break_previous_and_next_sign_interpretations = None
        self._character = None
        self._is_variant = None
        self.discriminator = None

        if line_id is not None:
            self.line_id = line_id
        self.previous_sign_interpretation_ids = previous_sign_interpretation_ids
        self.next_sign_interpretation_ids = next_sign_interpretation_ids
        self.attributes = attributes
        self.rois = rois
        self.commentary = commentary
        if break_previous_and_next_sign_interpretations is not None:
            self.break_previous_and_next_sign_interpretations = break_previous_and_next_sign_interpretations
        self.character = character
        self.is_variant = is_variant

    @property
    def line_id(self):
        """Gets the line_id of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The line_id of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: int
        """
        return self._line_id

    @line_id.setter
    def line_id(self, line_id):
        """Sets the line_id of this SignInterpretationCreateDTO.


        :param line_id: The line_id of this SignInterpretationCreateDTO.  # noqa: E501
        :type line_id: int
        """

        self._line_id = line_id

    @property
    def previous_sign_interpretation_ids(self):
        """Gets the previous_sign_interpretation_ids of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The previous_sign_interpretation_ids of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: list[int]
        """
        return self._previous_sign_interpretation_ids

    @previous_sign_interpretation_ids.setter
    def previous_sign_interpretation_ids(self, previous_sign_interpretation_ids):
        """Sets the previous_sign_interpretation_ids of this SignInterpretationCreateDTO.


        :param previous_sign_interpretation_ids: The previous_sign_interpretation_ids of this SignInterpretationCreateDTO.  # noqa: E501
        :type previous_sign_interpretation_ids: list[int]
        """

        self._previous_sign_interpretation_ids = previous_sign_interpretation_ids

    @property
    def next_sign_interpretation_ids(self):
        """Gets the next_sign_interpretation_ids of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The next_sign_interpretation_ids of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: list[int]
        """
        return self._next_sign_interpretation_ids

    @next_sign_interpretation_ids.setter
    def next_sign_interpretation_ids(self, next_sign_interpretation_ids):
        """Sets the next_sign_interpretation_ids of this SignInterpretationCreateDTO.


        :param next_sign_interpretation_ids: The next_sign_interpretation_ids of this SignInterpretationCreateDTO.  # noqa: E501
        :type next_sign_interpretation_ids: list[int]
        """

        self._next_sign_interpretation_ids = next_sign_interpretation_ids

    @property
    def attributes(self):
        """Gets the attributes of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The attributes of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: list[InterpretationAttributeCreateDTO]
        """
        return self._attributes

    @attributes.setter
    def attributes(self, attributes):
        """Sets the attributes of this SignInterpretationCreateDTO.


        :param attributes: The attributes of this SignInterpretationCreateDTO.  # noqa: E501
        :type attributes: list[InterpretationAttributeCreateDTO]
        """
        if self.local_vars_configuration.client_side_validation and attributes is None:  # noqa: E501
            raise ValueError("Invalid value for `attributes`, must not be `None`")  # noqa: E501

        self._attributes = attributes

    @property
    def rois(self):
        """Gets the rois of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The rois of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: list[SetInterpretationRoiDTO]
        """
        return self._rois

    @rois.setter
    def rois(self, rois):
        """Sets the rois of this SignInterpretationCreateDTO.


        :param rois: The rois of this SignInterpretationCreateDTO.  # noqa: E501
        :type rois: list[SetInterpretationRoiDTO]
        """
        if self.local_vars_configuration.client_side_validation and rois is None:  # noqa: E501
            raise ValueError("Invalid value for `rois`, must not be `None`")  # noqa: E501

        self._rois = rois

    @property
    def commentary(self):
        """Gets the commentary of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The commentary of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: CommentaryCreateDTO
        """
        return self._commentary

    @commentary.setter
    def commentary(self, commentary):
        """Sets the commentary of this SignInterpretationCreateDTO.


        :param commentary: The commentary of this SignInterpretationCreateDTO.  # noqa: E501
        :type commentary: CommentaryCreateDTO
        """

        self._commentary = commentary

    @property
    def break_previous_and_next_sign_interpretations(self):
        """Gets the break_previous_and_next_sign_interpretations of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The break_previous_and_next_sign_interpretations of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: bool
        """
        return self._break_previous_and_next_sign_interpretations

    @break_previous_and_next_sign_interpretations.setter
    def break_previous_and_next_sign_interpretations(self, break_previous_and_next_sign_interpretations):
        """Sets the break_previous_and_next_sign_interpretations of this SignInterpretationCreateDTO.


        :param break_previous_and_next_sign_interpretations: The break_previous_and_next_sign_interpretations of this SignInterpretationCreateDTO.  # noqa: E501
        :type break_previous_and_next_sign_interpretations: bool
        """

        self._break_previous_and_next_sign_interpretations = break_previous_and_next_sign_interpretations

    @property
    def character(self):
        """Gets the character of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The character of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: str
        """
        return self._character

    @character.setter
    def character(self, character):
        """Sets the character of this SignInterpretationCreateDTO.


        :param character: The character of this SignInterpretationCreateDTO.  # noqa: E501
        :type character: str
        """

        self._character = character

    @property
    def is_variant(self):
        """Gets the is_variant of this SignInterpretationCreateDTO.  # noqa: E501


        :return: The is_variant of this SignInterpretationCreateDTO.  # noqa: E501
        :rtype: bool
        """
        return self._is_variant

    @is_variant.setter
    def is_variant(self, is_variant):
        """Sets the is_variant of this SignInterpretationCreateDTO.


        :param is_variant: The is_variant of this SignInterpretationCreateDTO.  # noqa: E501
        :type is_variant: bool
        """
        if self.local_vars_configuration.client_side_validation and is_variant is None:  # noqa: E501
            raise ValueError("Invalid value for `is_variant`, must not be `None`")  # noqa: E501

        self._is_variant = is_variant

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
        if not isinstance(other, SignInterpretationCreateDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SignInterpretationCreateDTO):
            return True

        return self.to_dict() != other.to_dict()
