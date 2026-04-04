import React, { useState } from 'react'
import SubHeader from '@/shared/SubHeader'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { User, Mail, Phone, MapPin, Building2, Shield, Bell, Lock, Palette, Globe, Database, CreditCard } from 'lucide-react'

const Setting = () => {
    const [profile, setProfile] = useState({
        name: "John Anderson",
        email: "john.anderson@clothify.com",
        phone: "+1 (555) 123-4567",
        role: "Admin",
        company: "Clothify Fashion Group",
        location: "New York, USA",
        avatar: ""
    })

    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        orderUpdates: true,
        lowStockAlerts: true,
        weeklyReports: false,
        marketingEmails: false,
        securityAlerts: true,
    })

    const [preferences, setPreferences] = useState({
        language: "en",
        timezone: "America/New_York",
        currency: "USD",
        dateFormat: "MM/DD/YYYY",
        theme: "light",
    })

    return (
        <div className='space-y-6'>
            <SubHeader 
                title="Settings" 
                description="Manage your account settings and preferences" 
            />

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Update your personal details and profile picture</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Avatar Section */}
                            <div className="flex items-center gap-6">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src={profile.avatar} />
                                    <AvatarFallback className="bg-primary text-white text-2xl">
                                        {profile.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <Button variant="outline" size="sm">Upload Photo</Button>
                                    <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 2MB</p>
                                </div>
                            </div>

                            {/* Profile Form */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="name" 
                                            value={profile.name} 
                                            onChange={(e) => setProfile({...profile, name: e.target.value})}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="email" 
                                            type="email"
                                            value={profile.email} 
                                            onChange={(e) => setProfile({...profile, email: e.target.value})}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="phone" 
                                            value={profile.phone} 
                                            onChange={(e) => setProfile({...profile, phone: e.target.value})}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="role">Role</Label>
                                    <div className="relative">
                                        <Shield className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="role" 
                                            value={profile.role} 
                                            disabled
                                            className="pl-10 bg-muted"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="company" 
                                            value={profile.company} 
                                            onChange={(e) => setProfile({...profile, company: e.target.value})}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="location" 
                                            value={profile.location} 
                                            onChange={(e) => setProfile({...profile, location: e.target.value})}
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3">
                                <Button variant="outline">Cancel</Button>
                                <Button className="text-white">Save Changes</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Role & Permissions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Role & Permissions</CardTitle>
                            <CardDescription>Your current role and access permissions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h4 className="font-semibold">Current Role</h4>
                                        <p className="text-sm text-muted-foreground">Full system access</p>
                                    </div>
                                    <Badge className="bg-primary text-white">Admin</Badge>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { name: "Dashboard Access", granted: true },
                                        { name: "Manage Products", granted: true },
                                        { name: "Manage Inventory", granted: true },
                                        { name: "Manage Branches", granted: true },
                                        { name: "Manage Users", granted: true },
                                        { name: "View Reports", granted: true },
                                        { name: "Manage Vendors", granted: true },
                                        { name: "System Settings", granted: true },
                                    ].map((permission, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                            <span className="text-sm">{permission.name}</span>
                                            <Badge className={permission.granted ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}>
                                                {permission.granted ? "Granted" : "Denied"}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Change Password</CardTitle>
                            <CardDescription>Update your password to keep your account secure</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="current-password" type="password" className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="new-password" type="password" className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm New Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="confirm-password" type="password" className="pl-10" />
                                </div>
                            </div>
                            <Button className="text-white">Update Password</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Two-Factor Authentication</CardTitle>
                            <CardDescription>Add an extra layer of security to your account</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <h4 className="font-semibold">2FA Status</h4>
                                    <p className="text-sm text-muted-foreground">Currently disabled</p>
                                </div>
                                <Button variant="outline">Enable 2FA</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Active Sessions</CardTitle>
                            <CardDescription>Manage your active login sessions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {[
                                    { device: "Chrome on Windows", location: "New York, USA", time: "Current session", current: true },
                                    { device: "Safari on iPhone", location: "New York, USA", time: "2 hours ago", current: false },
                                    { device: "Chrome on MacBook", location: "New York, USA", time: "1 day ago", current: false },
                                ].map((session, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div>
                                            <h4 className="font-medium">{session.device}</h4>
                                            <p className="text-sm text-muted-foreground">{session.location} • {session.time}</p>
                                        </div>
                                        {session.current ? (
                                            <Badge className="bg-green-100 text-green-700">Current</Badge>
                                        ) : (
                                            <Button variant="outline" size="sm">Revoke</Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Notifications Tab */}
                <TabsContent value="notifications" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notification Preferences</CardTitle>
                            <CardDescription>Choose what notifications you want to receive</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {[
                                { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                                { key: 'orderUpdates', label: 'Order Updates', description: 'Get notified about new orders and status changes' },
                                { key: 'lowStockAlerts', label: 'Low Stock Alerts', description: 'Receive alerts when products are running low' },
                                { key: 'weeklyReports', label: 'Weekly Reports', description: 'Get weekly summary of your business performance' },
                                { key: 'marketingEmails', label: 'Marketing Emails', description: 'Receive updates about new features and promotions' },
                                { key: 'securityAlerts', label: 'Security Alerts', description: 'Important security notifications and login alerts' },
                            ].map((item) => (
                                <div key={item.key} className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <Bell className="h-4 w-4 text-muted-foreground" />
                                            <h4 className="font-medium">{item.label}</h4>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                    <Switch 
                                        checked={notifications[item.key]} 
                                        onCheckedChange={(checked) => setNotifications({...notifications, [item.key]: checked})}
                                    />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Preferences Tab */}
                <TabsContent value="preferences" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>System Preferences</CardTitle>
                            <CardDescription>Customize your dashboard experience</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="language">Language</Label>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                                        <Select value={preferences.language} onValueChange={(value) => setPreferences({...preferences, language: value})}>
                                            <SelectTrigger className="pl-10">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="en">English</SelectItem>
                                                <SelectItem value="es">Spanish</SelectItem>
                                                <SelectItem value="fr">French</SelectItem>
                                                <SelectItem value="de">German</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="timezone">Timezone</Label>
                                    <Select value={preferences.timezone} onValueChange={(value) => setPreferences({...preferences, timezone: value})}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                                            <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                                            <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                                            <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="currency">Currency</Label>
                                    <Select value={preferences.currency} onValueChange={(value) => setPreferences({...preferences, currency: value})}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USD">USD ($)</SelectItem>
                                            <SelectItem value="EUR">EUR (€)</SelectItem>
                                            <SelectItem value="GBP">GBP (£)</SelectItem>
                                            <SelectItem value="JPY">JPY (¥)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="dateFormat">Date Format</Label>
                                    <Select value={preferences.dateFormat} onValueChange={(value) => setPreferences({...preferences, dateFormat: value})}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                                            <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                                            <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Theme</Label>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: 'light', label: 'Light', icon: '☀️' },
                                        { value: 'dark', label: 'Dark', icon: '🌙' },
                                    ].map((theme) => (
                                        <div 
                                            key={theme.value}
                                            onClick={() => setPreferences({...preferences, theme: theme.value})}
                                            className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                                preferences.theme === theme.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                                            }`}
                                        >
                                            <span className="text-2xl">{theme.icon}</span>
                                            <span className="font-medium">{theme.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end gap-3">
                                <Button variant="outline">Reset to Default</Button>
                                <Button className="text-white">Save Preferences</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Data & Storage</CardTitle>
                            <CardDescription>Manage your data and storage settings</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Database className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <h4 className="font-semibold">Storage Used</h4>
                                        <p className="text-sm text-muted-foreground">2.4 GB of 10 GB</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-primary">24%</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: '24%' }} />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button variant="outline" size="sm">Clear Cache</Button>
                                <Button variant="outline" size="sm">Export Data</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Billing Tab */}
                <TabsContent value="billing" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Current Plan</CardTitle>
                            <CardDescription>Manage your subscription and billing</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold">Growth Plan</h3>
                                        <p className="text-muted-foreground">For growing fashion brands</p>
                                    </div>
                                    <Badge className="bg-primary text-white text-lg px-4 py-2">Active</Badge>
                                </div>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-4xl font-bold">$149</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Up to 5 Branches</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Unlimited SKUs</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Advanced Analytics</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Priority Support</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <Button variant="outline">Change Plan</Button>
                                    <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">Cancel Subscription</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Method</CardTitle>
                            <CardDescription>Manage your payment methods</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        <CreditCard className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">•••• •••• •••• 4242</h4>
                                        <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">Edit</Button>
                                    <Button variant="outline" size="sm">Remove</Button>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full">Add Payment Method</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Billing History</CardTitle>
                            <CardDescription>View your past invoices and payments</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {[
                                    { date: "Dec 1, 2024", amount: "$149.00", status: "Paid", invoice: "INV-2024-12" },
                                    { date: "Nov 1, 2024", amount: "$149.00", status: "Paid", invoice: "INV-2024-11" },
                                    { date: "Oct 1, 2024", amount: "$149.00", status: "Paid", invoice: "INV-2024-10" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div>
                                            <h4 className="font-medium">{item.invoice}</h4>
                                            <p className="text-sm text-muted-foreground">{item.date}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="font-semibold">{item.amount}</span>
                                            <Badge className="bg-green-100 text-green-700">{item.status}</Badge>
                                            <Button variant="outline" size="sm">Download</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Setting