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

from qumranica_api_connector.configuration import Configuration


class SetInterpretationRoiDTO(object):
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
        'artefact_id': 'int',
        'sign_interpretation_id': 'int',
        'shape': 'str',
        'translate': 'TranslateDTO',
        'stance_rotation': 'int',
        'exceptional': 'bool',
        'values_set': 'bool'
    }

    attribute_map = {
        'artefact_id': 'artefactId',
        'sign_interpretation_id': 'signInterpretationId',
        'shape': 'shape',
        'translate': 'translate',
        'stance_rotation': 'stanceRotation',
        'exceptional': 'exceptional',
        'values_set': 'valuesSet'
    }

    def __init__(self, artefact_id=None, sign_interpretation_id=None, shape=None, translate=None, stance_rotation=None, exceptional=None, values_set=None, local_vars_configuration=None):  # noqa: E501
        """SetInterpretationRoiDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._artefact_id = None
        self._sign_interpretation_id = None
        self._shape = None
        self._translate = None
        self._stance_rotation = None
        self._exceptional = None
        self._values_set = None
        self.discriminator = None

        self.artefact_id = artefact_id
        self.sign_interpretation_id = sign_interpretation_id
        self.shape = shape
        self.translate = translate
        if stance_rotation is not None:
            self.stance_rotation = stance_rotation
        self.exceptional = exceptional
        self.values_set = values_set

    @property
    def artefact_id(self):
        """Gets the artefact_id of this SetInterpretationRoiDTO.  # noqa: E501


        :return: The artefact_id of this SetInterpretationRoiDTO.  # noqa: E501
        :rtype: int
        """
        return self._artefact_id

    @artefact_id.setter
    def artefact_id(self, artefact_id):
        """Sets the artefact_id of this SetInterpretationRoiDTO.


        :param artefact_id: The artefact_id of this SetInterpretationRoiDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and artefact_id is None:  # noqa: E501
            raise ValueError("Invalid value for `artefact_id`, must not be `None`")  # noqa: E501

        self._artefact_id = artefact_id

    @property
    def sign_interpretation_id(self):
        """Gets the sign_interpretation_id of this SetInterpretationRoiDTO.  # noqa: E501


        :return: The sign_interpretation_id of this SetInterpretationRoiDTO.  # noqa: E501
        :rtype: int
        """
        return self._sign_interpretation_id

    @sign_interpretation_id.setter
    def sign_interpretation_id(self, sign_interpretation_id):
        """Sets the sign_interpretation_id of this SetInterpretationRoiDTO.


        :param sign_interpretation_id: The sign_interpretation_id of this SetInterpretationRoiDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and sign_interpretation_id is None:  # noqa: E501
            raise ValueError("Invalid value for `sign_interpretation_id`, must not be `None`")  # noqa: E501

        self._sign_interpretation_id = sign_interpretation_id

    @property
    def shape(self):
        """Gets the shape of this SetInterpretationRoiDTO.  # noqa: E501


        :return: The shape of this SetInterpretationRoiDTO.  # noqa: E501
        :rtype: str
        """
        return self._shape

    @shape.setter
    def shape(self, shape):
        """Sets the shape of this SetInterpretationRoiDTO.


        :param shape: The shape of this SetInterpretationRoiDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and shape is None:  # noqa: E501
            raise ValueError("Invalid value for `shape`, must not be `None`")  # noqa: E501

        self._shape = shape

    @property
    def translate(self):
        """Gets the translate of this SetInterpretationRoiDTO.  # noqa: E501


        :return: The translate of this SetInterpretationRoiDTO.  # noqa: E501
        :rtype: TranslateDTO
        """
        return self._translate

    @translate.setter
    def translate(self, translate):
        """Sets the translate of this SetInterpretationRoiDTO.


        :param translate: The translate of this SetInterpretationRoiDTO.  # noqa: E501
        :type: TranslateDTO
        """
        if self.local_vars_configuration.client_side_validation and translate is None:  # noqa: E501
            raise ValueError("Invalid value for `translate`, must not be `None`")  # noqa: E501

        self._translate = translate

    @property
    def stance_rotation(self):
        """Gets the stance_rotation of this SetInterpretationRoiDTO.  # noqa: E501


        :return: The stance_rotation of this SetInterpretationRoiDTO.  # noqa: E501
        :rtype: int
        """
        return self._stance_rotation

    @stance_rotation.setter
    def stance_rotation(self, stance_rotation):
        """Sets the stance_rotation of this SetInterpretationRoiDTO.


        :param stance_rotation: The stance_rotation of this SetInterpretationRoiDTO.  # noqa: E501
        :type: int
        """

        self._stance_rotation = stance_rotation

    @property
    def exceptional(self):
        """Gets the exceptional of this SetInterpretationRoiDTO.  # noqa: E501


        :return: The exceptional of this SetInterpretationRoiDTO.  # noqa: E501
        :rtype: bool
        """
        return self._exceptional

    @exceptional.setter
    def exceptional(self, exceptional):
        """Sets the exceptional of this SetInterpretationRoiDTO.


        :param exceptional: The exceptional of this SetInterpretationRoiDTO.  # noqa: E501
        :type: bool
        """
        if self.local_vars_configuration.client_side_validation and exceptional is None:  # noqa: E501
            raise ValueError("Invalid value for `exceptional`, must not be `None`")  # noqa: E501

        self._exceptional = exceptional

    @property
    def values_set(self):
        """Gets the values_set of this SetInterpretationRoiDTO.  # noqa: E501


        :return: The values_set of this SetInterpretationRoiDTO.  # noqa: E501
        :rtype: bool
        """
        return self._values_set

    @values_set.setter
    def values_set(self, values_set):
        """Sets the values_set of this SetInterpretationRoiDTO.


        :param values_set: The values_set of this SetInterpretationRoiDTO.  # noqa: E501
        :type: bool
        """
        if self.local_vars_configuration.client_side_validation and values_set is None:  # noqa: E501
            raise ValueError("Invalid value for `values_set`, must not be `None`")  # noqa: E501

        self._values_set = values_set

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
        if not isinstance(other, SetInterpretationRoiDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SetInterpretationRoiDTO):
            return True

        return self.to_dict() != other.to_dict()
