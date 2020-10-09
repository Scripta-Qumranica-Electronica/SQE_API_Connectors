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


class UnactivatedEmailUpdateRequestDTO(object):
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
        'new_email': 'str',
        'email': 'str'
    }

    attribute_map = {
        'new_email': 'newEmail',
        'email': 'email'
    }

    def __init__(self, new_email=None, email=None, local_vars_configuration=None):  # noqa: E501
        """UnactivatedEmailUpdateRequestDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._new_email = None
        self._email = None
        self.discriminator = None

        self.new_email = new_email
        self.email = email

    @property
    def new_email(self):
        """Gets the new_email of this UnactivatedEmailUpdateRequestDTO.  # noqa: E501


        :return: The new_email of this UnactivatedEmailUpdateRequestDTO.  # noqa: E501
        :rtype: str
        """
        return self._new_email

    @new_email.setter
    def new_email(self, new_email):
        """Sets the new_email of this UnactivatedEmailUpdateRequestDTO.


        :param new_email: The new_email of this UnactivatedEmailUpdateRequestDTO.  # noqa: E501
        :type new_email: str
        """
        if self.local_vars_configuration.client_side_validation and new_email is None:  # noqa: E501
            raise ValueError("Invalid value for `new_email`, must not be `None`")  # noqa: E501
        if (self.local_vars_configuration.client_side_validation and
                new_email is not None and not re.search(r'^.*@.*\..*$', new_email)):  # noqa: E501
            raise ValueError(r"Invalid value for `new_email`, must be a follow pattern or equal to `/^.*@.*\..*$/`")  # noqa: E501

        self._new_email = new_email

    @property
    def email(self):
        """Gets the email of this UnactivatedEmailUpdateRequestDTO.  # noqa: E501


        :return: The email of this UnactivatedEmailUpdateRequestDTO.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this UnactivatedEmailUpdateRequestDTO.


        :param email: The email of this UnactivatedEmailUpdateRequestDTO.  # noqa: E501
        :type email: str
        """
        if self.local_vars_configuration.client_side_validation and email is None:  # noqa: E501
            raise ValueError("Invalid value for `email`, must not be `None`")  # noqa: E501
        if (self.local_vars_configuration.client_side_validation and
                email is not None and not re.search(r'^.*@.*\..*$', email)):  # noqa: E501
            raise ValueError(r"Invalid value for `email`, must be a follow pattern or equal to `/^.*@.*\..*$/`")  # noqa: E501

        self._email = email

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
        if not isinstance(other, UnactivatedEmailUpdateRequestDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UnactivatedEmailUpdateRequestDTO):
            return True

        return self.to_dict() != other.to_dict()
