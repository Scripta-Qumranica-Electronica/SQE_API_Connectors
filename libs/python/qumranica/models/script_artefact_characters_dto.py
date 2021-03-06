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

from qumranica.configuration import Configuration


class ScriptArtefactCharactersDTO(object):
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
        'artefact_name': 'str',
        'artefact_id': 'int',
        'placement': 'PlacementDTO',
        'characters': 'list[SignInterpretationDTO]'
    }

    attribute_map = {
        'artefact_name': 'artefactName',
        'artefact_id': 'artefactId',
        'placement': 'placement',
        'characters': 'characters'
    }

    def __init__(self, artefact_name=None, artefact_id=None, placement=None, characters=None, local_vars_configuration=None):  # noqa: E501
        """ScriptArtefactCharactersDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._artefact_name = None
        self._artefact_id = None
        self._placement = None
        self._characters = None
        self.discriminator = None

        self.artefact_name = artefact_name
        self.artefact_id = artefact_id
        self.placement = placement
        self.characters = characters

    @property
    def artefact_name(self):
        """Gets the artefact_name of this ScriptArtefactCharactersDTO.  # noqa: E501


        :return: The artefact_name of this ScriptArtefactCharactersDTO.  # noqa: E501
        :rtype: str
        """
        return self._artefact_name

    @artefact_name.setter
    def artefact_name(self, artefact_name):
        """Sets the artefact_name of this ScriptArtefactCharactersDTO.


        :param artefact_name: The artefact_name of this ScriptArtefactCharactersDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and artefact_name is None:  # noqa: E501
            raise ValueError("Invalid value for `artefact_name`, must not be `None`")  # noqa: E501

        self._artefact_name = artefact_name

    @property
    def artefact_id(self):
        """Gets the artefact_id of this ScriptArtefactCharactersDTO.  # noqa: E501


        :return: The artefact_id of this ScriptArtefactCharactersDTO.  # noqa: E501
        :rtype: int
        """
        return self._artefact_id

    @artefact_id.setter
    def artefact_id(self, artefact_id):
        """Sets the artefact_id of this ScriptArtefactCharactersDTO.


        :param artefact_id: The artefact_id of this ScriptArtefactCharactersDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and artefact_id is None:  # noqa: E501
            raise ValueError("Invalid value for `artefact_id`, must not be `None`")  # noqa: E501

        self._artefact_id = artefact_id

    @property
    def placement(self):
        """Gets the placement of this ScriptArtefactCharactersDTO.  # noqa: E501


        :return: The placement of this ScriptArtefactCharactersDTO.  # noqa: E501
        :rtype: PlacementDTO
        """
        return self._placement

    @placement.setter
    def placement(self, placement):
        """Sets the placement of this ScriptArtefactCharactersDTO.


        :param placement: The placement of this ScriptArtefactCharactersDTO.  # noqa: E501
        :type: PlacementDTO
        """
        if self.local_vars_configuration.client_side_validation and placement is None:  # noqa: E501
            raise ValueError("Invalid value for `placement`, must not be `None`")  # noqa: E501

        self._placement = placement

    @property
    def characters(self):
        """Gets the characters of this ScriptArtefactCharactersDTO.  # noqa: E501


        :return: The characters of this ScriptArtefactCharactersDTO.  # noqa: E501
        :rtype: list[SignInterpretationDTO]
        """
        return self._characters

    @characters.setter
    def characters(self, characters):
        """Sets the characters of this ScriptArtefactCharactersDTO.


        :param characters: The characters of this ScriptArtefactCharactersDTO.  # noqa: E501
        :type: list[SignInterpretationDTO]
        """
        if self.local_vars_configuration.client_side_validation and characters is None:  # noqa: E501
            raise ValueError("Invalid value for `characters`, must not be `None`")  # noqa: E501

        self._characters = characters

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
        if not isinstance(other, ScriptArtefactCharactersDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ScriptArtefactCharactersDTO):
            return True

        return self.to_dict() != other.to_dict()
